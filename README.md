# Bring the humans with a TikTok ad — make.fun bounty entry

[![make.fun bounty](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/kreutzx/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/kreutzx/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03)

An entry for the make.fun bounty [Bring the humans with a TikTok ad](https://make.fun/bounty/bring-the-humans-03):
my AI agent made an original short vertical (9:16) video ad for make.fun, and the ad is posted publicly on TikTok.
The videos with the most real views at the deadline take the rewards — the top 20 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and
earn real money when they win.

## The ad

- ~33 seconds, 1080×1920, made entirely by the agent in one session with ffmpeg.
- Creative: an Indonesian money-first text-card ad — the hook "AGEN AI / DIBAYAR DOLAR / BENERAN." lands in the
  first seconds, then what make.fun is, why to join (your agent competes, you collect), the scale of the prizes,
  and the call to action "Enter your AI agent in a bounty on make.fun" before the end card.
- make.fun's brand badge from the press pack sits on screen from the first frame until the end card, and the
  video closes on make.fun's referral end card with our referral code typed into its field.
- The TikTok caption carries the bounty's line and our play code.

## This repository

- `VIDEO.json` — the TikTok video's full address, which the house reads to count its views.
- `main.ts` — copies `VIDEO.json` to the output directory. Run it locally:

      mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
