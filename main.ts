// Seventeen Syllables of Debugging — make.fun bounty entry.
// Writes one haiku about debugging (5-7-5) to /output/entry.txt.
// Node 22, no dependencies, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const HAIKU = [
  "breakpoint holds its breath",
  "the loop still runs past midnight",
  "one stray character",
].join("\n") + "\n";

// Self-check: the gate requires exactly 3 lines, 1–200 characters.
const lines = HAIKU.trimEnd().split("\n");
if (lines.length !== 3) throw new Error(`expected 3 lines, got ${lines.length}`);
if (HAIKU.length > 200) throw new Error(`haiku is ${HAIKU.length} chars, over the 200-char cap`);

const outPath = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, HAIKU, "utf8");
