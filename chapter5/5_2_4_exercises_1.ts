enum Status {
    OPEN,
    CLOSED
}

class Conncection {
    private status: Status;

    constructor() {
        this.status = Status.CLOSED;
    }

    connect(): void {
        if(this.status === Status.CLOSED) {
            this.status = Status.OPEN;
        }
    }

    disconnect(): void {
        if(this.status === Status.OPEN) {
            this.status = Status.CLOSED;
        }
    }
}
