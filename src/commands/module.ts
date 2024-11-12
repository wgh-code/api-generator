import loading from "../utils/loading";

export default function (config: ConfigFile, name: string) {
  setTimeout(() => {
    loading.fail(`Failed to generate ${name} module`);
  }, 3000);
}
