export class ApiResponse<T> {
  constructor(statusCode: number, message: string, success: boolean, data: T) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.susscess = success;
  }

  statusCode: number;
  message: string;
  data: T;
  susscess: boolean;
}

export class ApiError<T> extends Error {
  statusCode: number;
  error?: T;
  constructor(statusCode: number, message: string, error?: T) {
    super(message);
    this.statusCode = statusCode;
    this.error = error;
  }
}
