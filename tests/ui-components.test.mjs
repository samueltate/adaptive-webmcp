import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));

async function readFilesTree(directory, extension) {
  const entries = await readdir(directory, { withFileTypes: true });
  const contents = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        return readFilesTree(entryPath, extension);
      }
      return entry.name.endsWith(extension) ? readFile(entryPath, "utf8") : "";
    }),
  );
  return contents.join("\n");
}

const readCssTree = (directory) => readFilesTree(directory, ".css");
const readJsTree = (directory) => readFilesTree(directory, ".js");

test("emits Adaptive WebMCP interface states", async () => {
  const css = await readCssTree(path.join(root, "dist"));

  assert.match(css, /\.portal\[data-text=large\]/);
  assert.match(css, /\.portal\[data-text=extra-large\]/);
  assert.match(css, /\.portal\[data-contrast=high\]/);
  assert.match(css, /\.portal\[data-motion=reduced\]/);
  assert.match(css, /service-updates/);
  assert.match(css, /\.focus-card/);
  assert.match(css, /\.mobile-preview-shell/);
  assert.match(css, /\.mobile-preview-stage/);
});

test("emits mobile preview WebMCP tools", async () => {
  const js = await readJsTree(path.join(root, "dist"));

  assert.match(js, /show_mobile_preview/);
  assert.match(js, /close_mobile_preview/);
  assert.match(js, /mobile-viewport-preview/);
});
