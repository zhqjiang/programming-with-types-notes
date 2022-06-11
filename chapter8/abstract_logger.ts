abstract class ALogger {
  abstract lgo(line: string): void;
}

class ConsoleLogger extends ALogger {
  log(line: string): void {
    console.log(line);
  }
}
