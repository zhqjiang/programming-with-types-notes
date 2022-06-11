interface ILogger {
  log(line: string): void;
}

class ConsoleLogger implements ILogger {
  log(line: string): void {
    console.log(line);
  }
}

interface IExtendedLogger extends ILogger {
  warn(line: string): void;
  error(line: string): void;
}
