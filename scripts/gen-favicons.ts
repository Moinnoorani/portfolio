// Generate favicon PNGs from the SVG source.
// Run with: bun run /home/z/my-project/scripts/gen-favicons.ts
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const SVG = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" fill="#FAF7F0"/>
  <rect x="4" y="4" width="56" height="56" fill="#FF6B35" stroke="#0A0A0A" stroke-width="4"/>
  <g font-family="'Playfair Display', Georgia, 'Times New Roman', serif" font-weight="900" font-size="34" fill="#0A0A0A" text-anchor="middle">
    <text x="32" y="44" letter-spacing="-2">MN</text>
  </g>
  <circle cx="54" cy="10" r="3" fill="#FFD23F" stroke="#0A0A0A" stroke-width="2"/>
</svg>
`);

const OUT = "/home/z/my-project/public";
await mkdir(OUT, { recursive: true });

const sizes = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "favicon-96x96.png", size: 96 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "android-chrome-192x192.png", size: 192 },
  { name: "android-chrome-512x512.png", size: 512 },
  { name: "favicon-48x48.png", size: 48 },
];

for (const { name, size } of sizes) {
  await sharp(SVG, { density: 384 })
    .resize(size, size, { fit: "contain" })
    .png()
    .toFile(`${OUT}/${name}`);
  console.log(`OK ${name} (${size}x${size})`);
}

console.log("\nAll favicons generated in /public");
