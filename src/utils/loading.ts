import ora from "ora";

class Loading {
  private static spinner: InstanceType<typeof Loading>;

  static getInstance() {
    if (!this.spinner) {
      this.spinner = ora({ color: "blue" });
    }
    return this.spinner;
  }

  start() {
    Loading.spinner.start();
  }

  stop() {
    Loading.spinner.stop();
  }

  succeed(text: string) {
    Loading.spinner.succeed(text);
  }

  fail(text: string, error?: Error) {
    Loading.spinner.fail(text + error?.message);
  }
}

export default Loading.getInstance();
