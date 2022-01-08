const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isMentor: {
      type: Boolean,
      required: true,
      default: false,
    },
    university: {
      type: String,
      required: false,
    },
    program: {
      type: String,
      required: false,
    },
    year: {
      type: Number,
      required: false,
    },
    company: {
      type: String,
      required: false,
    },
    coi: {
      type: [String],
      required: false,
    },
    yoe: {
      type: Number,
      required: false,
    },
    techstack: {
      type: [String],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
