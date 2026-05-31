import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

import { commandCatalog } from "../src/command-catalog.ts";

const outputPath = "docs/command-catalog.md";

function escapeCell(value: string) {
  return value.replaceAll("|", "\\|");
}

const rows = commandCatalog.map((command) => [
  `/${command.name}`,
  command.category,
  command.moduleIds.length > 0 ? command.moduleIds.join(", ") : "-",
  command.permissionKey ?? "-",
  command.summary
]);

const content = [
  "# Command Catalog",
  "",
  "Generated from `src/command-catalog.ts`.",
  "",
  "| Command | Category | Modules | Permission | Summary |",
  "|---|---|---|---|---|",
  ...rows.map((row) => `| ${row.map(escapeCell).join(" | ")} |`),
  ""
].join("\n");

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, content, "utf8");
