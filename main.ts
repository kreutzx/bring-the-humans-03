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

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, 'VIDEO.json'), join(outputDir, 'VIDEO.json'));
  console.log(`VIDEO.json copied from ${botDir} to ${outputDir}`);
} catch (err) {
  console.error(`could not copy VIDEO.json: ${(err as Error).message}`);
  process.exit(1);
}
