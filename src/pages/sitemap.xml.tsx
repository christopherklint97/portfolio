import fs from "fs";
import { getPostSlugs } from "../lib/api";
import { ServerResponse } from "http";
import { join } from "path";

export default function Sitemap() {
  return null;
}

export const getServerSideProps: any = ({ res }: { res: ServerResponse }) => {
  const baseUrl = {
    development: "http://localhost:3000",
    test: "http://localhost:3000",
    production: "https://www.christopherklint.com",
  }[process.env.NODE_ENV];

  const staticPages = fs
    .readdirSync(
      {
        development: join(process.cwd(), "src", "pages"),
        test: join(process.cwd(), "src", "pages"),
        production: "./",
      }[process.env.NODE_ENV]
    )
    .filter((staticPage) => {
      return ![
        "_app.tsx",
        "_document.tsx",
        "_error.tsx",
        "sitemap.xml.tsx",
        "index.tsx",
        "blog",
        "404.tsx",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath.replace(".tsx", "")}`;
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${[`${baseUrl}/`, ...staticPages]
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
        ${getPostSlugs()
          .map((slug) => {
            const realSlug = slug.replace(/\.md$/, "");
            return `
            <url>
              <loc>${baseUrl}/blog/${realSlug}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
          })
          .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
};
