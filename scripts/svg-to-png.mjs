import sharp from "sharp";
import { readFileSync } from "node:fs";

const PROJECT = "/Users/davekjellmarong/Desktop/Code/Projects/AltaNettsider";
const BG = { r: 14, g: 17, b: 23, alpha: 1 };
const TRANSPARENT = { r: 0, g: 0, b: 0, alpha: 0 };

async function square(input, output, size, transparent = false) {
  await sharp(readFileSync(input), { density: 600 })
    .resize(size, size, {
      fit: "contain",
      background: transparent ? TRANSPARENT : BG,
    })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(output);
  console.log(
    `  ${output.split("/").pop()}  (${size}x${size})${transparent ? "  transparent" : ""}`,
  );
}

async function rect(input, output, w, h, transparent = false) {
  await sharp(readFileSync(input), { density: 600 })
    .resize(w, h, {
      fit: "contain",
      background: transparent ? TRANSPARENT : BG,
    })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(output);
  console.log(
    `  ${output.split("/").pop()}  (${w}x${h})${transparent ? "  transparent" : ""}`,
  );
}

const mark = `${PROJECT}/public/logo-mark.svg`;
const word = `${PROJECT}/public/logo.svg`;
const out = `${PROJECT}/public`;

console.log("Square mark (dark bg — for FB profile pic):");
await square(mark, `${out}/logo-mark-512.png`, 512);
await square(mark, `${out}/logo-mark-1024.png`, 1024);
await square(mark, `${out}/logo-mark-2048.png`, 2048);
await square(mark, `${out}/logo-mark-4096.png`, 4096);

console.log("\nSquare mark (transparent — for overlays / social):");
await square(mark, `${out}/logo-mark-1024-transparent.png`, 1024, true);
await square(mark, `${out}/logo-mark-2048-transparent.png`, 2048, true);

console.log("\nWordmark (dark bg):");
await rect(word, `${out}/logo-wordmark-1200.png`, 1200, 210);
await rect(word, `${out}/logo-wordmark-2400.png`, 2400, 420);

console.log("\nWordmark (transparent):");
await rect(word, `${out}/logo-wordmark-1200-transparent.png`, 1200, 210, true);
await rect(word, `${out}/logo-wordmark-2400-transparent.png`, 2400, 420, true);
