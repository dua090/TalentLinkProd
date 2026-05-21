const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
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

    role: {
      type: String,
      enum: [
        "ENTERPRISE_ADMIN",
        "COMPANY_ADMIN",
        "SENIOR_MANAGER",
        "RECRUITER",
        "INTERVIEWER",
        "CANDIDATE",
      ],
      default: "CANDIDATE",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);