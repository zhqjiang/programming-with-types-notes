declare function read(): string;

class Connection {
    private doProcess: () => void = this.processClosedConnection();

    public process(): void {
        this.doProcess();
    }

    private processClosedConnection() {
        this.doProcess = this.processClosedConnection;
    }

    private processOpenConnection() {
        const value: string = read();

        if (value.length == 0) {
            this.doProcess = this.processClosedConnection;
        } else {
            console.log(value);
        }
    }
}
