const User = require("../models/User");
const jwt = require("jsonwebtoken");

const { UnauthenticatedError } = require("../errors");

const auth = async (req, res, next) => {
  //check header
  const authHeader = req.header.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnauthenticatedError("Authentication Invalid");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    //attach user to the Job Route
    req.user = { userID: payload.userID, name: payload.name };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authenticated Invalid");
  }
};

module.exports = auth;
