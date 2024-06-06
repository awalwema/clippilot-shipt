const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

execSync("next-sitemap");

const publicDir = path.join(__dirname, "public");
const outDir = path.join(__dirname, "out");

const filesToMove = ["sitemap.xml", "robots.txt"];

filesToMove.forEach((file) => {
  const src = path.join(publicDir, file);
  const dest = path.join(outDir, file);
  if (fs.existsSync(src)) {
    fs.renameSync(src, dest);
  }
});
