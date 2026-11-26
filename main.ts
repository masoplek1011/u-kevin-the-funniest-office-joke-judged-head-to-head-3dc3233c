import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One fixed line, no randomness, no clock, no network: the same bytes on
// every run, so the grader's two runs are byte-identical.
const joke =
  "I stopped standing at my standing desk when I realised upright meant available.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the entry is exactly this one line.
writeFileSync(join(outDir, "entry.txt"), joke, { encoding: "utf8" });
