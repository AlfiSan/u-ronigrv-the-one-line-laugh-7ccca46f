// The One-Line Laugh — make.fun entry (u-ronigrv-the-one-line-laugh-7ccca46f)
//
// The whole entry is one funny line. The program's only job is to hand that
// line to the grader, exactly as written, in /output/entry.txt.
//
// Why this line: a dad tells his little boy the tooth fairy is real — an
// everyday white lie every parent recognises — and the boy takes it
// literally, like a tiny accountant. The turn lands at the very end:
// not just an invoice, but late fees. One sentence, nothing to explain.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "I told my son the tooth fairy was real, and now he sends me an invoice for every tooth, plus late fees.";

// The grader reads /output/entry.txt. Honour an override when one is set so
// the program can be tried out locally without touching the real output dir.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, LINE, "utf8");

console.log(`Wrote ${LINE.length} characters to ${outFile}`);
