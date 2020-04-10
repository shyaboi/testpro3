const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chatSchema = new Schema ({
content: String,
Date: {
  type: Date,
  default: Date.now
},
user_id: String,
project_id: String

})

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;