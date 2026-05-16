import fs from "fs";
import path from "path";

const distDir = path.resolve(process.cwd(), "dist");
const indexFile = path.join(distDir, "index.html");
const notFoundFile = path.join(distDir, "404.html");

if (!fs.existsSync(indexFile)) {
  console.error("Build output not found: dist/index.html");
  process.exit(1);
}

fs.copyFileSync(indexFile, notFoundFile);
console.log("Copied dist/index.html to dist/404.html for GitHub Pages SPA fallback.");
