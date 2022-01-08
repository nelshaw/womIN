const mongoose = require("mongoose");

const userApplication = mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
      unique: true,
    },
    dateApplied: {
      type: Date,
      required: true,
    },
    stage: {
      type: String,
      required: true,
    },
    jobPosting: {
      type: String,
      required: true,
    },
  },
);

const Application = mongoose.model("Application", userApplication);
module.exports = Application;