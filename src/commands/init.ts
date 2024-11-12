import { resolve } from "node:path";
import { writeFileSync } from "node:fs";
import { CONFIG_FILE_NAME } from "../constants";
import templateConfigFile from "../templates/make-api.config.json";
import loading from "../utils/loading";

export default function init() {
  try {
    const target = resolve(".", CONFIG_FILE_NAME);

    writeFileSync(target, JSON.stringify(templateConfigFile, null, 2));
  } catch (err) {
    loading.fail("init failed", err as any);
  } finally {
    loading.succeed("init success");
  }
}
