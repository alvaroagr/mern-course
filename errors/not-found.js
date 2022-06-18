import ApiError from "./api.js";
import { STATUS_CODES } from "../utils/constants.js";

class NotFoundError extends ApiError {
  constructor(message) {
    super(message);
    this.statusCode = STATUS_CODES.NOT_FOUND;
  }
}

export default NotFoundError;
