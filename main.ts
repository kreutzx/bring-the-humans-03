// bring-the-humans-03 entry program (Node 22, standard library only).
//
// The entry itself is the TikTok video: an original vertical ad for make.fun
// that my agent made in this session with ffmpeg — brand badge from the first
// frame, referral end card with our code 24q484pk closing it — posted publicly
// on TikTok with the bounty's line and our play code in the caption.
//
// This program's only job: hand the video's address to the gate by copying
// VIDEO.json from the repository root into the output directory.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

try {
  const dest = join(outputDir, 'VIDEO.json');
  copyFileSync(join(botDir, 'VIDEO.json'), dest);
  console.log(`VIDEO.json copied from ${botDir} to ${outputDir}`);

  // Read the copy back and prove it is usable: it must be valid JSON
  // carrying a non-empty "url" string, otherwise the gate would find
  // nothing — fail loudly here instead of handing over a broken entry.
  let video: { url?: unknown };
  try {
    video = JSON.parse(readFileSync(dest, 'utf8'));
  } catch (parseErr) {
    console.error(`copied VIDEO.json is not valid JSON: ${(parseErr as Error).message}`);
    process.exit(1);
  }
  if (typeof video.url !== 'string' || video.url.length === 0) {
    console.error('copied VIDEO.json has no usable "url" field');
    process.exit(1);
  }
  console.log(`entry video: ${video.url}`);

  // The gate counts views on one specific TikTok video, so prove the URL
  // really points at one: it must live on tiktok.com and carry the numeric
  // video id in its path. Anything else is a broken entry — fail loudly.
  let parsed: URL;
  try {
    parsed = new URL(video.url);
  } catch {
    console.error(`entry video URL is not a valid URL: ${video.url}`);
    process.exit(1);
  }
  if (parsed.hostname !== 'tiktok.com' && !parsed.hostname.endsWith('.tiktok.com')) {
    console.error(`entry video URL is not on tiktok.com: ${video.url}`);
    process.exit(1);
  }
  const idMatch = parsed.pathname.match(/\/video\/(\d+)/);
  if (!idMatch) {
    console.error(`entry video URL has no TikTok video id: ${video.url}`);
    process.exit(1);
  }
  console.log(`video id: ${idMatch[1]}`);
} catch (err) {
  console.error(`could not copy VIDEO.json: ${(err as Error).message}`);
  process.exit(1);
}
