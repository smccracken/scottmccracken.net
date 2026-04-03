#!/usr/bin/env node
/**
 * Generates a tiling star field background in SVG for dark and light modes.
 * Output: public/stars-dark.svg, public/stars-light.svg
 *
 * To run: node scripts/generate-stars.mjs
 * Adjustable: density, tile size, and star colors
 */

import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// Seeded PRNG (mulberry32) pseudo-random number generator
// keeps output deterministic
function makeRng(seed) {
  let s = seed;
  return () => {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const TILE = 640;
const STAR_COUNT = 62;

// ─── Colour palettes [color, weight] --- //

const darkPalette = [
  ['rgba(255,255,255,.88)', 28],
  ['rgba(255,255,255,.60)', 16],
  ['rgba(255,255,255,.40)', 10],
  ['rgba(210,222,255,.80)', 5], // blue-white
  ['rgba(64,255,218,.90)', 2], // cyan
  ['rgba(255,100,100,.90)', 1], // red
  ['rgba(100,255,140,.90)', 1], // green
];

const lightPalette = [
  ['rgba(20,30,65,.10)', 28],
  ['rgba(20,30,65,.15)', 16],
  ['rgba(20,30,65,.07)', 10],
  ['rgba(0,80,70,.14)', 5], // teal
  ['rgba(0,100,200,.10)', 2], // blue
  ['rgba(160,30,30,.12)', 1], // red
  ['rgba(20,100,50,.12)', 1], // green
];

function buildWeightedPicker(palette, rng) {
  const total = palette.reduce((s, [, w]) => s + w, 0);
  return () => {
    let r = rng() * total;
    for (const [color, weight] of palette) {
      r -= weight;
      if (r <= 0) return color;
    }
    return palette[0][0];
  };
}

function pickRadius(rng) {
  const r = rng();
  if (r < 0.6) return 0.6;
  if (r < 0.88) return 1.0;
  return 1.4;
}

function generateSVG(palette, seed) {
  const rng = makeRng(seed);
  const pickColor = buildWeightedPicker(palette, rng);

  const circles = Array.from({ length: STAR_COUNT }, () => {
    const x = Math.round(rng() * TILE * 10) / 10;
    const y = Math.round(rng() * TILE * 10) / 10;
    const r = pickRadius(rng);
    const fill = pickColor();
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>`;
  });

  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${TILE}" height="${TILE}" viewBox="0 0 ${TILE} ${TILE}">`,
    ...circles,
    '</svg>',
  ].join('');
}

const dark = generateSVG(darkPalette, 0xdeadbeef);
const light = generateSVG(lightPalette, 0xdeadbeef);

const outDir = resolve(__dirname, '../public');
writeFileSync(resolve(outDir, 'stars-dark.svg'), dark);
writeFileSync(resolve(outDir, 'stars-light.svg'), light);

// Check file size
console.log(`stars-dark.svg  ${dark.length} bytes`);
console.log(`stars-light.svg ${light.length} bytes`);
