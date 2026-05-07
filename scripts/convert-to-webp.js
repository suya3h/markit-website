/**
 * convert-to-webp.js
 * Converts all PNG / JPG / JPEG files in src/assets (recursively) to WebP.
 * Original files are kept untouched.
 *
 * Usage:  node scripts/convert-to-webp.js
 */

const sharp = require('sharp');
const fs    = require('fs');
const path  = require('path');

const ASSETS_DIR  = path.join(__dirname, '..', 'src', 'assets');
const QUALITY     = 80;   // 0-100, 80 is a great balance
const MAX_WIDTH   = 1920; // pixels – downscale oversized images

// ── Gather all image files recursively ──────────────────────────────────────
function walk(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(walk(full));
    } else if (/\.(png|jpe?g)$/i.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

// ── Convert ──────────────────────────────────────────────────────────────────
(async () => {
  const files = walk(ASSETS_DIR);
  console.log(`\nFound ${files.length} image(s) to convert.\n`);

  let saved = 0;

  for (const src of files) {
    const dest = src.replace(/\.(png|jpe?g)$/i, '.webp');

    // Skip if WebP already exists and is newer than source
    if (fs.existsSync(dest)) {
      const srcMtime  = fs.statSync(src).mtimeMs;
      const destMtime = fs.statSync(dest).mtimeMs;
      if (destMtime >= srcMtime) {
        console.log(`  skip   ${path.relative(ASSETS_DIR, src)}  (up-to-date)`);
        continue;
      }
    }

    try {
      const meta = await sharp(src).metadata();

      let pipeline = sharp(src);

      // Only downscale if wider than MAX_WIDTH
      if (meta.width > MAX_WIDTH) {
        pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
      }

      await pipeline.webp({ quality: QUALITY }).toFile(dest);

      const srcKB  = (fs.statSync(src).size  / 1024).toFixed(0);
      const destKB = (fs.statSync(dest).size / 1024).toFixed(0);
      const pct    = Math.round((1 - destKB / srcKB) * 100);

      console.log(
        `  ✓  ${path.relative(ASSETS_DIR, src).padEnd(60)} ${String(srcKB).padStart(6)} KB  →  ${String(destKB).padStart(6)} KB  (-${pct}%)`
      );

      saved += (fs.statSync(src).size - fs.statSync(dest).size);
    } catch (err) {
      console.error(`  ✗  ${path.relative(ASSETS_DIR, src)}  ERROR: ${err.message}`);
    }
  }

  const savedMB = (saved / 1024 / 1024).toFixed(1);
  console.log(`\nDone! Total saved: ${savedMB} MB\n`);
})();
