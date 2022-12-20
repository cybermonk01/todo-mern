const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "Name should not be more than 25 Characters"],
      trim: true,
      maxLength: 25,
    },

    email: {
      type: String,
      require: [
        true,
        "Email should be valid and should not contain any keyword",
      ],
      unique: true,
    },

    todos: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Todo",
          required: [true, "Todo Id is required"],
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
