const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    comapny: {
      type: String,
      required: [true, "Please Provide Company name"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please Provide position"],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "please provid a user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
