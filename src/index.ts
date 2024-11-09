import { isJson } from "./utils";

if (isJson("{}")) {
  console.info("is json")
} else {
  console.info("not json")
}