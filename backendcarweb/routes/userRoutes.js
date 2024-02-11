const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  allUser,
  userDelete,
  sendEmail,
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/allUser", allUser);
router.delete("/userDelete/:id", userDelete);
router.post("/sendmail", sendEmail);
module.exports = router;
