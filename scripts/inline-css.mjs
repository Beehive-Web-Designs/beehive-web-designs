import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "out");

const STYLESHEET_LINK =
  /<link rel="stylesheet" href="(\/_next\/static\/[^"]+\.css)"[^>]*\/?>/g;

function walkHtmlFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkHtmlFiles(fullPath, files);
    } else if (entry.name.endsWith(".html")) {
      files.push(fullPath);
    }
  }
  return files;
}

function inlineStylesheets(html) {
  const cssChunks = [];
  const hrefs = [...html.matchAll(STYLESHEET_LINK)].map((match) => match[1]);

  for (const href of hrefs) {
    const cssPath = path.join(OUT_DIR, href.replace(/^\//, ""));
    if (fs.existsSync(cssPath)) {
      cssChunks.push(fs.readFileSync(cssPath, "utf8"));
    }
  }

  if (cssChunks.length === 0) {
    return html;
  }

  const withoutLinks = html.replace(STYLESHEET_LINK, "");
  const styleTag = `<style>${cssChunks.join("\n")}</style>`;

  return withoutLinks.replace("<head>", `<head>${styleTag}`);
}

function main() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error("Missing out/ directory. Run next build first.");
    process.exit(1);
  }

  const htmlFiles = walkHtmlFiles(OUT_DIR);
  let updated = 0;

  for (const file of htmlFiles) {
    const original = fs.readFileSync(file, "utf8");
    const next = inlineStylesheets(original);
    if (next !== original) {
      fs.writeFileSync(file, next);
      updated += 1;
    }
  }

  console.log(`Inlined CSS into ${updated} HTML file(s).`);
}

main();
