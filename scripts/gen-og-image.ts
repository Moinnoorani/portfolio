// Generate Open Graph image (1200x630) for social sharing.
// Run with: bun run /home/z/my-project/scripts/gen-og-image.ts
import sharp from "sharp";

const WIDTH = 1200;
const HEIGHT = 630;

// Build an SVG OG image matching the brutal portfolio aesthetic.
const SVG = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FF6B35"/>
      <stop offset="100%" stop-color="#FF4D6D"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

  <!-- Decorative shapes -->
  <rect x="40" y="40" width="80" height="80" fill="#FFD23F" stroke="#0A0A0A" stroke-width="6" transform="rotate(8 80 80)"/>
  <circle cx="1100" cy="540" r="60" fill="#A8E6CF" stroke="#0A0A0A" stroke-width="6"/>
  <rect x="1080" y="60" width="60" height="60" fill="#C8B6FF" stroke="#0A0A0A" stroke-width="6" transform="rotate(-12 1110 90)"/>

  <!-- Top banner -->
  <rect x="60" y="60" width="500" height="50" fill="#0A0A0A"/>
  <text x="80" y="95" font-family="monospace" font-size="22" font-weight="700" fill="#FFD23F" letter-spacing="3">// PORTFOLIO · 2026</text>

  <!-- Big MN mark on right -->
  <rect x="900" y="180" width="240" height="240" fill="#0A0A0A" stroke="#0A0A0A" stroke-width="6"/>
  <text x="1020" y="350" font-family="'Playfair Display', Georgia, serif" font-size="180" font-weight="900" fill="#FF6B35" text-anchor="middle">MN</text>

  <!-- Main headline -->
  <text x="80" y="280" font-family="'Playfair Display', Georgia, serif" font-size="76" font-weight="900" fill="#0A0A0A">Moin Noorani</text>
  <text x="80" y="370" font-family="'Playfair Display', Georgia, serif" font-size="44" font-weight="700" font-style="italic" fill="#0A0A0A">Business Analyst &amp; AI Solutions Lead</text>

  <!-- Tagline -->
  <text x="80" y="450" font-family="sans-serif" font-size="26" font-weight="500" fill="#0A0A0A">ERP · Analytics · AI Workflows · Supply Chain</text>

  <!-- Bottom row -->
  <rect x="60" y="510" width="1080" height="60" fill="#0A0A0A"/>
  <text x="80" y="552" font-family="monospace" font-size="24" font-weight="700" fill="#FAF7F0">moinnoorani.online</text>
  <text x="1120" y="552" font-family="monospace" font-size="20" font-weight="700" fill="#FFD23F" text-anchor="end">India · Open to Relocate</text>
</svg>
`);

const OUT = "/home/z/my-project/public/og-image.png";

await sharp(SVG, { density: 144 })
  .png()
  .toFile(OUT);

console.log(`OK og-image.png (${WIDTH}x${HEIGHT}) saved to ${OUT}`);
