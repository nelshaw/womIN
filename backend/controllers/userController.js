const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

const registerUser = async (req, res) => {
  const {
    name,
    email,
    password,
    isMentor,
    university,
    program,
    year,
    company,
    coi,
    yoe,
    techstack,
  } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already registered");
  }

  const user = await User.create({
    name,
    email,
    password,
    isMentor,
    university,
    program,
    year,
    company,
    coi,
    yoe,
    techstack,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isMentor: user.isMentor,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User could not be added");
  }
};

const authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isMentor: user.isMentor,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid email/password");
  }
};

module.exports = { registerUser, authUser };
