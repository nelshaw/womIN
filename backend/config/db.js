const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {});

    console.log(`MongDB connected: ${conn}`);
  } catch (err) {
    console.log("error connecting to db: " + err);
    process.exit();
  }
};

module.exports = connectDB;
