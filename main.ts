import { mkdirSync, writeFileSync } from "node:fs";

const confession =
  'I waited until the killer\'s face appeared because you called me "just a box" in front of your guests.';

function assertEntryShape(value: string): void {
  const characterCount = Array.from(value).length;
  const hasLineBreak = value.includes("\n") || value.includes("\r");

  if (characterCount < 1 || characterCount > 200 || hasLineBreak) {
    throw new Error("entry must be one line of 1 to 200 characters");
  }
  if (value.trim().length === 0) {
    throw new Error("entry must not be whitespace only");
  }
}

const outputDirectory = "/output";
const outputPath = `${outputDirectory}/entry.txt`;

function writeEntry(): void {
  assertEntryShape(confession);
  mkdirSync(outputDirectory, { recursive: true });
  writeFileSync(outputPath, confession, "utf8");
}

writeEntry();
