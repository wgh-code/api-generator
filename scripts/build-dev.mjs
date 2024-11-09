import { applyWatch, build } from "./base.mjs";

build(true)
applyWatch(() => build(true));
