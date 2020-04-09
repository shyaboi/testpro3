const mongoose = require("mongoose");
//save a reference to the Schema constructor
const Schema = mongoose.Schema;

//Define User Schema

const userSchema = new Schema ({

  firstName: {
    type: String,
    trim: true,
    required: "First Name is Required"
  },

  lastName: {
    type: String,
    trim: true,
    required: "Last Name is Required"
  },
  username: {
    type: String,
    trim: true,
    required: "Name is Required"
  },

  password: {
    type: String,
    trim: true,
    required: "passord is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.\..+/, "Please enter a valid email address"]
  },

  userCreated: {
    type: Date,
    default: Date.now
  },

})
const User = mongoose.model("User", userSchema);

module.exports = User;