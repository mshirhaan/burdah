// generateSitemap.ts
import fs from "fs";

const baseUrl = "https://qaseedaburda.com"; // Replace with your website's base URL
const outputPath = "./public/sitemap.xml"; // Adjust the path to where you want to save the sitemap

// Define an array of known pages including hash fragments
const pages = [
  "/",
  "/#/credits",
  // Add hash fragment pages from 1 to 10
  ...Array.from({ length: 10 }, (_, i) => `#/chapters/${i + 1}`),
  // Add the additional page with a different domain
];

// Create the sitemap XML content
const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      return `
      <url>
        <loc>${baseUrl}${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      `;
    })
    .join("")}
</urlset>`;

// Save the sitemap XML to the specified outputPath
fs.writeFileSync(outputPath, xmlContent, "utf-8");

console.log("Sitemap generated successfully");
