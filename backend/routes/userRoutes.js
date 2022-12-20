const express = require("express");
const {
  home,
  createUser,
  updateUser,
  deleteUser,
  getUsers,
} = require("../Controllers/userController");
const router = express.Router();
router
  .get("/", home)
  .get("/getUsers", getUsers)
  .post("/createUser", createUser)
  .put("/updateUser/:id", updateUser)
  .delete("/deleteUser/:id", deleteUser);

module.exports = router;
