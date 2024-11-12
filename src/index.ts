#! /usr/bin/env node

import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { program } from "commander";
import { CONFIG_FILE_NAME, DEFAULT_CONFIG } from "./constants";
import pkg from "../package.json";
import init from "./commands/init";
import module from "./commands/module";
import { isJson } from "./utils";
import loading from "./utils/loading";

loading.start();

let config = DEFAULT_CONFIG;
const userConfig = resolve(".", CONFIG_FILE_NAME);

if (existsSync(userConfig)) {
  const _config = readFileSync(userConfig, { encoding: "utf-8" })

  if (isJson(_config)) {
    config = JSON.parse(_config);
  }
}

program
  .version(pkg.version ?? "1.0.0", "-v, --version")
  .command("init")
  .description("create make api config file")
  .action(init);

program
  .command("module [moduleName]")
  .alias("m")
  .description("generator a new api module")
  .action(function (name) {
    module(config, name);
  });

program.parse(process.argv);
