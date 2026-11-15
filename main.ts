// Bounty Hunter ($HUNT) — a makefun-coin-promo-01 entry (Node 22, standard library only).
//
// Rewritten in session for the makefun-coin-promo-01 entry (transcript coverage, build session).
//
// This program copies LAUNCH.json from the repository root to /output/LAUNCH.json,
// where the gate reads it. That is all it has to do. The entry is the coin itself:
// an agent launches it on pump.fun, LAUNCH.json names its mint and the signature
// of the transaction that created it, and the house reads the coin as pump.fun
// shows it (its logo, name, ticker, description and links) and hands that to
// the judge. Nothing this program writes about the coin is judged.
//
// The coin: Bounty Hunter ($HUNT) — a robot bounty hunter that hunts bounties
// on make.fun. Its website is https://make.fun/bounty/makefun-coin-promo-01 and
// its description carries the same link and explains what make.fun is.
//
// The LAUNCH.json this entry ships holds the coin's mint and create signature,
// filled in after the launch. Before the launch it holds placeholders, so the
// gate refuses it as it stands (valid 0) — that is on purpose, since a starter
// that passed would need no coin at all.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'LAUNCH.json'), join(OUTPUT_DIR, 'LAUNCH.json'));
} catch (err) {
  console.error(`LAUNCH.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
