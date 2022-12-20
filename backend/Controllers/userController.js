const User = require("../model/userModel");

exports.home = (req, res) => {
  res.send("Hello world from user controller!");
};

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      throw new Error("Name and email are mandatory");
    }

    // check for the email

    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("Email already exists!");
    }

    const user = await User.create({ name, email });
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (err) {
    console.log("Na ho paya", err.message);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      users,
    });
  } catch (err) {
    console.log(err.message);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.send(200).json({
      success: true,
      message: "User updated successfully",
    });
  } catch (err) {
    console.log(err.message);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.send(200).json({
      success: true,
      message: "user deleted successfully",
    });
  } catch (err) {
    console.log(err.message);
  }
};
