import { STATUS_CODES } from "../utils/constants.js";
import ApiError from "./api.js";

class BadRequestError extends ApiError {
  constructor(message) {
    super(message);
    this.statusCode = STATUS_CODES.BAD_REQUEST;
  }
}

export default BadRequestError;
