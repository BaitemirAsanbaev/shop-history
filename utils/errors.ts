import { ValidationError } from "express-validator";

export class ApiError extends Error {
    status;
    error;
    constructor(status:number, message:string, errors: ValidationError[] = []) {
      super(message);
      this.status = status;
      this.error = errors;
    }
    static NotFound(message="Not Found", errors:ValidationError[] = []) {
      return new ApiError(404, message, errors)
    }
    static BadRequest(message="Bad Request", errors:ValidationError[] = []) {
      return new ApiError(400, message, errors)
    }
  }
  

  