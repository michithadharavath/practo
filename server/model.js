const mongoose = require("mongoose");
let Registeruser = new mongoose.Schema({
  username: {
    type: String,
    // reuired:true,
  },
  email: {
    type: String,
    // required: true,
    uinque: true,
  },
  password: {
    type: String,
    // required: true,
    uinque: true,
  },
  confirmpassword: {
    type: String,
    // required: true,
    uinque: true,
  },
  mobile: {
    type: Number,
    // required: true,
  },
  gender: {
    type: String,
    // required: true,
  },
});
module.exports = mongoose.model("Registeruser", Registeruser);
