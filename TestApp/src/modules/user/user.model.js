const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
      max: 15,
    },
    lastName: {
      type: String,
      required: true,
      max: 15,
    },
    fullName: {
      type: String,
      virtual: true,
    },
    posts: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
    phoneNumber: {
      type: Number,
      minlength: 10,
      required: true,
      unique: true,
      // TODO: validate phone number
    },
    email: {
      type: String,
      // TODO: validate email
    },
    skills: {
      programmingLanguages: {
        type: [String],
        required: true,
      },
      databases: {
        type: [String],
        required: true,
      },
      frameworks: {
        type: [String],
        required: false,
      },
      tools: {
        type: [String],
      },
      others: {
        type: [String],
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
