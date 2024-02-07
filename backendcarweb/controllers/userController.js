const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const errorHandler = require("../utils/error");
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
      return res.status(409).json({success: false ,message: "User already exists" });
    }

    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);
    console.log("Hashed Password:", hashPassword);

    const newUser = await User.create({
      name,
      email,
      userphone,
      password : hashPassword,
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
          userphone: newUser.userphone
        }
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
          isAdmin: user.isAdmin
        },
      });
    }else{
      res.status(400).json({ success: false, message: "Invaild Credentials" });
    }
  } catch (error) {}
};

const allUser = async (req,res)=>{
  try {
    const user = await User.find();
    if(user){
      res.status(200).json({users: user});
    }else{
      res.status(404).json({message: "Something went wrong"})
    }
    
  } catch (error) {
    
  }
}
module.exports = { registerUser, loginUser, allUser };
