import * as esbuild from "esbuild";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { watch } from "node:fs";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

export function applyWatch(callback) {
  watch(resolve(__dirname, "../src"), callback);
}

export async function build(isDev = false) {
  await esbuild.build({
    entryPoints: [resolve(__dirname, "../src/index.ts")],
    bundle: true,
    outfile: resolve(__dirname, "../dist/index.js"),
    minify: !isDev,
    sourcemap: isDev,
    platform: "node",
    target: "node16",
    format: "cjs",
  });
}
