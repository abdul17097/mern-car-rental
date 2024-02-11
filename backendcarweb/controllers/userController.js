const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const errorHandler = require("../utils/error");
const nodemailer = require("nodemailer");

// const registerUser = async (req, res, next) => {
//   try {
//     const { name, email, password, isAdmin, usercnic, userphone } = req.body;

//     const user = await User.findOne({ email });
//     if (user) {
//       console.log(user);
//       return next(errorHandler(409, "User already exists"))
//     }
//     const saltRounds = 10;
//     const hashPassword = await bcrypt.hash(password, saltRounds);
//     console.log("Hashed Password:", hashPassword);

//     const newUser = await User.create({
//       name,
//       email,
//       userphone,
//       password : hashPassword,
//       usercnic,
//     });
//     await newUser.save();
//     console.log(newUser);
//     if (newUser) {
//       return res.json({
//         success: true,
//         message: "Successfully SignUP",
//         data: {
//           id: newUser._id,
//           name: newUser.name,
//           email: newUser.email,
//           userphone: newUser.userphone
//         }
//       });
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     next(errorHandler(500, "Something went wrong"))
//   }
// };

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, isAdmin, usercnic, userphone } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      console.log(user);
      return res
        .status(409)
        .json({ success: false, message: "User already exists" });
    }

    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);
    console.log("Hashed Password:", hashPassword);

    const newUser = await User.create({
      name,
      email,
      userphone,
      password: hashPassword,
      usercnic,
    });
    await newUser.save();
    console.log(newUser);
    if (newUser) {
      return res.json({
        success: true,
        message: "Successfully SignUP",
        data: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          userphone: newUser.userphone,
        },
      });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { registerUser };

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      res.json({ success: false, message: "Invaild Credentials" });
    }
    const verifyPassword = await bcrypt.compare(password, user.password);
    if (verifyPassword && user) {
      const token = await jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
        expiresIn: "3d",
      });
      res.status(200).json({
        success: true,
        message: "Successfully Login",
        data: {
          id: user._id,
          token: token,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
        },
      });
    } else {
      res.status(400).json({ success: false, message: "Invaild Credentials" });
    }
  } catch (error) {}
};

const allUser = async (req, res) => {
  try {
    const user = await User.find();
    if (user) {
      res.status(200).json({ users: user });
    } else {
      res.status(404).json({ message: "Something went wrong" });
    }
  } catch (error) {}
};

const userDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (user) {
      return res.json({
        success: true,
        message: "Successfully Deleted",
        data: {
          id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
        },
      });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const sendEmail = async (req, res) => {
  console.log(req.body);
  try {
    const { email, subject, message } = req.body;
    const config = {
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    };
    const transporter = nodemailer.createTransport(config);
    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: subject,
      html: generateHtmlTemplate(message, subject),
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Failed to send email" });
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).json({ success: true, message: "Email sent" });
      }
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
};

const generateHtmlTemplate = (message, subject) => {
  return `
        <html>
          <head>
            <style>
              /* Add your custom CSS styles here */
              body {
                font-family: Arial, sans-serif;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ccc;
                border-radius: 5px;
              }
              h1 {
                color: #333;
              }
              p {
                color: #666;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>${subject}</h1>
              <p>${message}</p>
            </div>
          </body>
        </html>
      `;
};

module.exports = { registerUser, loginUser, allUser, userDelete, sendEmail };
