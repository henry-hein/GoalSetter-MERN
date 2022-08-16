// @desc Register new user
// @routes POST api/users
// @access public
const registerUser = (req, res) => {
  res.json({ message: "Register User"});
};

// @desc Authenticate a user
// @routes POST api/users/login
// @access public
const loginUser = (req, res) => {
  res.json({ message: "Login User"});
};

// @desc Get user data
// @routes GET api/users/me
// @access public
const getMe = (req, res) => {
  res.json({ message: "User data displaying"});
};

module.exports = {
  registerUser,
  loginUser,
  getMe
}