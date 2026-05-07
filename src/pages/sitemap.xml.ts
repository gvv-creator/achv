import type { APIRoute } from "astro";
import { company } from "../data/company";
import { navigation } from "../data/navigation";

const urls = [
  ...navigation.map((item) => item.href),
  "/privacy-policy",
  "/cookie-policy",
];

const uniqueUrls = [...new Set(urls)];

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

export const GET: APIRoute = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls
  .map((href) => {
    const loc = new URL(href, company.website).href;
    return `  <url>
    <loc>${escapeXml(loc)}</loc>
  </url>`;
  })
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
