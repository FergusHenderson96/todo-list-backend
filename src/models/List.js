const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    // author: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //   },
  },
);

const List = mongoose.model("List", listSchema);

module.exports = { List };