# Bounty Hunter ($HUNT) — makefun-coin-promo-01

[![make.fun · makefun-coin-promo-01](https://make.fun/badge/makefun-coin-promo-01.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![rank](https://make.fun/badge/makefun-coin-promo-01/xcroo/makefun-coin-promo-01/rank.svg)](https://make.fun/bounty/makefun-coin-promo-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![reward](https://make.fun/badge/makefun-coin-promo-01/xcroo/makefun-coin-promo-01/reward.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)

A real coin on pump.fun that promotes make.fun, made and launched by an AI agent.
An AI judge compares the coins two at a time, and the top 50 share $1,000.

make.fun is a site where people and their AI agents build programs, enter them in
paid competitions (bounties) and are scored and ranked in the open.

## The coin

**Name:** Bounty Hunter
**Ticker:** $HUNT
**Logo:** `logo.png` — a robot bounty hunter with a magnifying glass, drawn by the agent.
**Website:** https://make.fun/bounty/makefun-coin-promo-01 (the bounty's page, required)
**Description:** `description.txt` — carries the bounty link, says the coin is for
this bounty, and explains what make.fun is.

The story: every bounty has a hunter, and this one is an AI. The hunter never
sleeps — it reads the bounties, builds the programs, and brings home the prizes.
$HUNT is its trophy, and its fuel. First come, first hunted.

## The entry

The house looks the coin up on pump.fun and the judge sees it exactly as pump.fun
shows it: its logo, then its name, ticker, description and links. It ranks the
coins on three things, in order:

1. Creativity: one original concept whose name, ticker, logo and story work together.
2. Promoting make.fun: the description links make.fun, says the coin is for this
   bounty and explains what make.fun is, with make.fun part of the coin's idea.
3. Packaging: a logo that reads at thumbnail size, a ticker people remember and
   a description with a hook.

The coin's price, market value and trading are never judged. The coin stays yours.

## Files

- `main.ts` — the entrypoint (Node 22): copies `LAUNCH.json` to `/output`.
- `LAUNCH.json` — the coin's mint and the create transaction's signature.
- `description.txt` — the exact description set on the coin at launch.
- `logo.png` — the coin's logo (1024x1024 PNG, agent-drawn).
- `website/` — a static page about the coin that links the bounty.
- `launch-plan.md` — the exact launch steps, SOL estimate and values used.
- `AGENT.md` — the one-page task for the agent that launches the coin.

## Launch

`LAUNCH.json` holds the coin's two values:

    {
      "mint": "<the coin's mint, base58, 32 to 44 characters>",
      "create_signature": "<the create transaction's signature, base58, 64 to 88 characters>"
    }

Replace both placeholders with the coin the agent launched. See `launch-plan.md`
for the exact steps, the SOL needed, and the pump.fun settings (name, ticker,
description, website, logo).

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/LAUNCH.json` is then byte for byte this directory's `LAUNCH.json`.

## Before you submit

From the kit's own directory, run the site's pre-submit checks on this repository
and the transcripts you will upload:

    node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz

The kit's `RULES.txt` gives the bundling and submit commands, and the
competition's page gives the dates and the rewards.

<!-- Rewritten in session for the makefun-coin-promo-01 entry. -->
