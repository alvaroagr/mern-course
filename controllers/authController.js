import User from "../models/User.js ";
import { BadRequestError } from "../errors/index.js";
import { STATUS_CODES } from "../utils/constants.js";

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new BadRequestError("please provide all values");
    }

    const user = await User.create({ name, email, password });
    const token = user.createJWT();
    res.status(STATUS_CODES.CREATED).json({
      user: {
        email: user.email,
        lastName: user.lastName,
        location: user.location,
        name: user.name,
      },
      token,
      location: user.location,
    });
  } catch (error) {
    next(error);
  }
};
export const login = async (req, res) => {
  res.send("login successful");
};
export const updateUser = async (req, res) => {
  res.send("user updated");
};
