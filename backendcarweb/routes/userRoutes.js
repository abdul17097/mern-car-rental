const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  allUser,
  userDelete,
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/allUser", allUser);
router.delete("/userDelete/:id", userDelete);

module.exports = router;
