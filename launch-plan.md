# Launch plan — Bounty Hunter ($HUNT) on pump.fun

## The coin (exact values — do not change)

| Field | Value |
|---|---|
| Name | Bounty Hunter |
| Ticker | $HUNT |
| Logo | `logo.png` (1024x1024 PNG, 986,906 bytes, agent-drawn) |
| Website | https://make.fun/bounty/makefun-coin-promo-01 |
| Description | The exact text in `description.txt` (paste verbatim) |
| Chain | Solana (pump.fun) |
| Supply | 1,000,000,000 (fixed by pump.fun, 6 decimals) |

## Window

- Opens: 2026-11-15T06:00:00Z (14:00 CST 15 Nov)
- Deadline: 2026-11-17T06:00:00Z (14:00 CST 17 Nov)
- The coin MUST be created at or after the opening and before the deadline.
- Launch from a Solana wallet linked to the make.fun account that submits the
  entry. The wallet that signs pump.fun's create transaction (or the creator
  that transaction names) must be linked to the account.

## SOL needed (researched 2026-11-15)

pump.fun charges **0 SOL in platform fees to create a coin**. The real costs:

| Item | SOL |
|---|---|
| Create transaction (rent + network fees) | ~0.01 |
| First buy (standard, puts the coin on-chain) | ~0.02 |
| Buffer for fees/slippage | ~0.02 |
| **Minimum to launch** | **~0.03** |
| **Recommended (with a small first buy)** | **~0.10** |

- The first buy is optional but standard: it puts the coin on-chain and shows
  confidence. A 0.02 SOL first buy is the usual minimum.
- A 0.05–0.08 SOL first buy gives the coin initial activity and a visible
  holder (the creator). A larger first buy (0.5 SOL) buys ~3.5% of supply.
- Every buy/sell on the bonding curve costs 1.25% (0.95% protocol, 0.30% creator).
- Graduation needs ~85 SOL of buy volume (~411 SOL market cap) — not required
  for this bounty; the judge never sees price, market cap or trades.

**Bring at least 0.10 SOL in the launching wallet.** 0.03 SOL is the bare
minimum; 0.10 SOL is comfortable and leaves room for the first buy. If the
wallet holds less, top it up before starting — do not launch short.

## Launch steps (pump.fun website)

1. Open https://pump.fun and connect the linked Solana wallet (the one linked
   to the make.fun account, holding at least 0.10 SOL).
2. Click "Create coin" (or "Start a new coin").
3. Fill in:
   - Name: `Bounty Hunter`
   - Ticker: `HUNT` (pump.fun adds the $; enter HUNT only)
   - Description: paste the exact text from `description.txt` verbatim.
     It must contain `https://make.fun/bounty/makefun-coin-promo-01`.
   - Image: upload `logo.png`.
   - Website: `https://make.fun/bounty/makefun-coin-promo-01`
   - Twitter / Telegram: leave blank (none).
4. Set the first buy (initial buy) to 0.05 SOL (or 0.02 SOL minimum).
5. Review: name, ticker, description, website and logo must match this plan
   exactly. The website MUST be the make.fun bounty URL.
6. Click "Create coin" and approve the transaction in the wallet.
7. **Record immediately:**
   - The mint address (the coin's token address, base58, 32–44 chars).
   - The create transaction signature (base58, 64–88 chars) — find it in the
     wallet's transaction history or on Solscan, as the transaction that
     called pump.fun's create instruction.
8. Fill in `LAUNCH.json` with the mint and the create signature.
9. Run the program the way the grader does:
   `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
10. Bundle the transcripts and submit (see the kit's RULES.txt Enter section).

## After the launch — fill in LAUNCH.json

Replace both placeholders in `LAUNCH.json`:

    {
      "mint": "<the coin's mint>",
      "create_signature": "<the create transaction's signature>"
    }

Then commit and push, bundle the transcripts (this session + the launch
session), run the kit check, and submit before 2026-11-17T06:00:00Z.

## What the house checks (gate)

- The create signature is the transaction that created that mint.
- The coin was created inside the window (opening to deadline).
- The create transaction was signed by, or names as creator, a wallet linked
  to the submitting account.
- The description carries `make.fun/bounty/makefun-coin-promo-01`.
- The website is an http/https URL on make.fun (set to the bounty page).
- The metadata names an image that reads (logo.png, under 5 MiB / 16 MP).

## Risks

- **SOL balance:** if the wallet holds less than ~0.03 SOL, the launch cannot
  happen. Confirm the balance before starting.
- **Wrong wallet:** launching from a wallet NOT linked to the make.fun account
  gets the entry refused. Double-check the wallet is linked before launching.
- **Wrong website:** the website field MUST be the bounty URL. Any other URL
  (including a coin website of your own) gets the entry refused.
- **Description:** paste `description.txt` verbatim. If the bounty link is
  missing or mistyped, the entry is refused.
- **Timing:** the coin must be created inside the window. Launching before the
  opening or after the deadline gets the entry refused.

<!-- Rewritten in session for the makefun-coin-promo-01 entry. -->
