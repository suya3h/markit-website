/**
 * update-imports.js
 * Updates all .png / .jpg / .jpeg import statements in src/ JS files to .webp
 *
 * Usage: node scripts/update-imports.js
 */

const fs   = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '..', 'src');

function walkJS(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results = results.concat(walkJS(full));
    else if (/\.(js|jsx|ts|tsx)$/.test(entry.name)) results.push(full);
  }
  return results;
}

const files = walkJS(SRC_DIR);
let totalUpdated = 0;

for (const file of files) {
  let src = fs.readFileSync(file, 'utf8');

  // Match import statements that reference .png / .jpg / .jpeg asset files
  const updated = src.replace(
    /(import\s+\w+\s+from\s+['"][^'"]+)\.(png|jpe?g)(['"]\s*;)/gi,
    (match, before, ext, after) => {
      // Only rewrite if a matching .webp file exists
      const importPath = match.match(/from\s+['"]([^'"]+)['"]/)[1];
      const absPath = path.resolve(path.dirname(file), importPath);
      const webpPath = absPath.replace(/\.(png|jpe?g)$/i, '.webp');
      if (fs.existsSync(webpPath)) {
        totalUpdated++;
        return `${before}.webp${after}`;
      }
      return match; // keep original if no webp exists
    }
  );

  if (updated !== src) {
    fs.writeFileSync(file, updated, 'utf8');
    console.log(`  ✓  Updated: ${path.relative(SRC_DIR, file)}`);
  }
}

console.log(`\nDone — ${totalUpdated} import(s) updated.\n`);
