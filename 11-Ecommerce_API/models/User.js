const mongoose = require("mongoose");
const validator = require("validator");
const UserSchema = new mongoose.Schema({
  name: {
    type: string,
    required: [true, "please provide name"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: string,
    required: [true, "please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide valid email",
    },
  },
  password: {
    type: string,
    required: [true, "please provide password"],
    minlength: 6,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

module.exports = mongoose.model("User", UserSchema);
