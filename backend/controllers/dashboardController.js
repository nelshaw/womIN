const Application = require("../models/dashboardModel");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

const registerApplication = async (req, res) => {
  const {
    jobTitle,
    company,
    dateApplied,
    stage,
    jobPosting,
  } = req.body;

  const application = await Application.create({
    jobTitle,
    company,
    dateApplied,
    stage,
    jobPosting,
  });

  if (application) {
    res.status(201).json({
      _id: application._id,
      jobTitle: application.jobTitle,
      company: application.company,
      dateApplied: application.dateApplied,
      stage: application.stage,
      jobPosting: application.jobPosting,
    });
  } else {
    res.status(400);
    throw new Error("Application could not be added");
  }
};

const getAllApplications = async (req, res) => {
  const applications = await Application.find();
  res.json(applications);
};

const deleteApplications = async (req, res) => {
  const applications = await Application.deleteOne({_id:req.params.id});
  res.json(applications);
};

module.exports = { registerApplication, getAllApplications, deleteApplications };