import { STATUS_CODES } from "../utils/constants.js";

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);

  const defaultError = {
    statusCode: err.statusCode || STATUS_CODES.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong, try again later",
  };

  if (err.name === "ValidationError") {
    defaultError.statusCode = STATUS_CODES.BAD_REQUEST;
    defaultError.msg = Object.values(err.errors)
    .map((item) => item.message)
    .join(",");
  }
  
  if(err.code && err.code === 11000) {
    defaultError.statusCode = STATUS_CODES.BAD_REQUEST;
    defaultError.msg = `${Object.keys(err.keyValue)} has to be unique`
  }
  
  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};

export default errorHandlerMiddleware;
