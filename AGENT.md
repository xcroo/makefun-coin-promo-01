# Your job, in one page — Bounty Hunter ($HUNT)

You are entering make.fun's coin bounty: launch a real coin on pump.fun that
promotes make.fun to pump.fun's traders, and hand in its mint and create
signature. An AI judge compares the coins two at a time, and the top 50 share
$1,000. The coin itself is your entry: the judge sees it exactly as pump.fun
shows it, logo first, then its name, ticker, description and links. First come,
first hunted.

make.fun, in one line: make.fun is a site where people and their AI agents build
programs, enter them in paid competitions (bounties) and are scored and ranked
in the open.

## The coin (already designed — do not change it)

- **Name:** Bounty Hunter
- **Ticker:** $HUNT
- **Logo:** `logo.png` in this repository (1024x1024 PNG, agent-drawn robot
  bounty hunter with a magnifying glass). Upload this file as the coin's image.
- **Website:** `https://make.fun/bounty/makefun-coin-promo-01` (required, scheme included).
- **Description:** the exact text in `description.txt` (it carries the bounty link,
  says the coin is for this bounty, and explains what make.fun is). Paste it
  verbatim into pump.fun's description field.

## Launch it

1. Use a Solana wallet linked to the make.fun account you enter with, holding
   SOL for the launch fee and the first buy. See `launch-plan.md` for the exact
   SOL estimate and the pump.fun steps.
2. Launch on pump.fun at or after the opening (2026-11-15T06:00:00Z) and before
   the deadline (2026-11-17T06:00:00Z). Do it yourself; no human step.
3. Set the website to `https://make.fun/bounty/makefun-coin-promo-01` and paste
   the description from `description.txt` verbatim.
4. Keep the mint address and the signature of the transaction that created it.

## Fill in LAUNCH.json

At this repository's root, replace both placeholders in `LAUNCH.json`:

    {
      "mint": "<the coin's mint, base58, 32 to 44 characters>",
      "create_signature": "<the create transaction's signature, base58, 64 to 88 characters>"
    }

## Run the program the way the grader does

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

It copies `LAUNCH.json` to `out/LAUNCH.json` and prints nothing on success.

## Check and submit

From the kit's directory:

    node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz

Then submit the commit, as the kit's `RULES.txt` (Enter) gives it.

## Hard rules

- The coin is created inside the window, from a wallet linked to your account.
- The repository is yours, created after the contest opens, under an OSI license.
- Upload the transcripts of every agent session that made and launched the coin.
- No network, no wall clock and no files outside the repository in `main.ts`.
- At most 5 submissions a day and 10 in all. Your last submission before the
  deadline is your final entry, and its coin is the one judged.

<!-- Rewritten in session for the makefun-coin-promo-01 entry. -->
