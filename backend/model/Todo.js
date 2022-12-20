const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodoSchema = new Schema(
  {
    title: {
      type: String,
      require: [true, "Title is mandatory"],
    },
    tasks: {
      type: [String],
    },
    isImportant: Boolean,
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      // required: [, "User Id os required to create a todo"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", TodoSchema);
