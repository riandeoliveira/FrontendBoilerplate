import { HttpException, HttpStatus } from "@nestjs/common";

type StatusError = keyof typeof HttpStatus;

export class HttpError {
  constructor(protected message: string, protected statusError: StatusError) {
    this.throw();
  }

  protected throw(): void {
    const exception = {
      status_code: HttpStatus[this.statusError],
      message: this.message,
      error: this.statusError.replace("_", " "),
    };

    throw new HttpException(exception, HttpStatus[this.statusError]);
  }
}
