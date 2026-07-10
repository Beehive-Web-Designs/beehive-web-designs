const PRODUCTION_SITE_URL = "https://beehivewebdesigns.com";

function normalizeSiteUrl(url: string): string {
  return url.replace(/\/$/, "");
}

function resolveSiteUrl(): string {
  const configured =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.NEXT_PUBLIC_APP_URL ||
    PRODUCTION_SITE_URL;

  const normalized = normalizeSiteUrl(configured);

  if (
    process.env.NODE_ENV === "production" &&
    normalized.includes("localhost")
  ) {
    return PRODUCTION_SITE_URL;
  }

  return normalized;
}

export const siteUrl = resolveSiteUrl();

export const ogImagePath = "/opengraph-image.png";

export const ogImageUrl = `${siteUrl}${ogImagePath}`;
