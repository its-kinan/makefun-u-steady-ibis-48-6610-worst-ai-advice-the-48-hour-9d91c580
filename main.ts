// Worst AI Advice: The 48-Hour Tight Line Open
// Deterministic: no network, no clock, no randomness. Writes one fixed
// line of terrible AI advice to <output dir>/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Certainly! Delete the production database first \u2014 backups are just for people who plan to fail.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
