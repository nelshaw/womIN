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
      university: user.university,
      program: user.program,
      company: user.company,
      coi: user.coi,
      techstack: user.techstack,
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
      university: user.university,
      program: user.program,
      company: user.company,
      coi: user.coi,
      techstack: user.techstack,
    });
  } else {
    res.status(400);
    throw new Error("Invalid email/password");
  }
};

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

const getMentors = async (req, res) => {
  const user = await User.find({ isMentor: true });
  console.log(user);
  res.json(user);
};

const getMentorsByCompany = async (req, res) => {
  const user = await User.find({ isMentor: true, company: req.params.company });
  console.log(user);
  res.json(user);
};

const getMentorsByUni = async (req, res) => {
  const user = await User.find({
    isMentor: true,
    university: req.params.uni,
  });
  console.log(user);
  res.json(user);
};

const getMentorsByTechstack = async (req, res) => {
  const user = await User.find({
    isMentor: true,
    techstack: req.params.techstack,
  });
  console.log(user);
  res.json(user);
};

module.exports = {
  registerUser,
  authUser,
  getAllUsers,
  getUserById,
  getMentors,
  getMentorsByCompany,
  getMentorsByUni,
  getMentorsByTechstack,
};
