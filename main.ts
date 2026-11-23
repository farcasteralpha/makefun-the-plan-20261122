// The plan make.fun will carry out in public.
// Writes one plan (1-280 chars) to /output/entry.txt. No network, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const PLAN =
  "Day one: list 200 US plumbers with no website on Google Maps, email a $49 one-page site + Google Business post pack, built by code in 1 hour, prepaid via Stripe link. $100 buys domain, inbox, 500 emails. Close 5 week one ($245), repeat; stop after 300 emails with no sales.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLAN, "utf8");
