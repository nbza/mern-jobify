import jwt from "jsonwebtoken";

import { UnAuthenticatedError } from "../errors/index.js";

const auth = async (req, res, next) => {
const token = req.cookies.token;
if(!token) {
  throw new UnAuthenticatedError("Authenticated Invalid")
}

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const testUser = payload.userId === "63bd1a6bb127a407bdf41929";
    req.user = { userId: payload.userId,testUser };
    next();
  } catch (error) {
    throw new UnAuthenticatedError("authentication invalid");
  }
};

export default auth;
