const mongoose = require("mongoose");
const { validatePhoneNumber, validateEmail } = require('../../../constants/validators');

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
      required: true,
      unique: true,
      validate: {
        validator: validatePhoneNumber,
        message: props => `${props.value} is not a valid phone number! It must start with 7, 8, or 9 and contain exactly 10 digits.`
      }
    },
    email: {
      type: String,
      validate: {
        validator: validateEmail,
        message: props => `${props.value} is not a valid email.`
      }
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
