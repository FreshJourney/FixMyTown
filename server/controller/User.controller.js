const User = require("../models/User.model");

const Register = async (req, res) => {
  const { Email, Username, Password } = req.body;
  const chkUser = await User.findOne({ Email: Email });
  if (chkUser) {
    return res.status(400).json({ message: "User Exists" });
  }
  const NewUser = new User({
    Username: Username,
    Email: Email,
    Password: Password,
  });
  await NewUser.save();
  return res.status(200).json({ message: "User Created Successfully" });
};

const Login = (req, res) => {
  try {
    const { Email, Password } = req.body;
  } catch (error) {
    console.log(error);
  }
};
module.exports = { Register };
