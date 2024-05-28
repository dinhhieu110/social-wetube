const asyncHandler = require('express-async-handler');

const login = asyncHandler(async (req, res) => {
  res.status(200).json('login');
});

module.exports = { login };
