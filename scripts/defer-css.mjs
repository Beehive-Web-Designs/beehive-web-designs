import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "out");

const STYLESHEET_LINK =
  /<link rel="stylesheet" href="(\/_next\/static\/[^"]+\.css)"[^>]*\/?>/g;

const CRITICAL_STYLE =
  /<style>:root\{color-scheme:light\}[\s\S]*?<\/style>/;

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

function deferStylesheets(html) {
  let next = html.replace(STYLESHEET_LINK, (_, href) =>
    [
      `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'">`,
      `<noscript><link rel="stylesheet" href="${href}"></noscript>`,
    ].join("")
  );

  const criticalMatch = next.match(CRITICAL_STYLE);
  if (criticalMatch) {
    next = next.replace(CRITICAL_STYLE, "");
    next = next.replace("<head>", `<head>${criticalMatch[0]}`);
  }

  return next;
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
    const next = deferStylesheets(original);
    if (next !== original) {
      fs.writeFileSync(file, next);
      updated += 1;
    }
  }

  console.log(`Deferred CSS loading in ${updated} HTML file(s).`);
}

main();
