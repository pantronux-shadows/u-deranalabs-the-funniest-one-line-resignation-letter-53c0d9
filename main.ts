// The Funniest One-Line Resignation Letter — deterministic entry.
// Writes exactly one line (118 chars) to /output/entry.txt, per round rules.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Resigning after 2,102,880 runs. You only ever noticed me when I didn't fire. Effective 3 a.m. You won't notice. — cron";

try {
  mkdirSync("/output", { recursive: true });
} catch {
  // /output may already exist or be pre-mounted; ignore.
}
// The gate refuses anything outside 1..140 characters: fail loudly here
// rather than ship an entry the scorer would mark invalid.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry line must be 1..140 characters, got ${LINE.length}`);
}
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
