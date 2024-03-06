module.exports = (req, res, next) => {
  const { email, password } = req.body;
  const regex = /\S+@\S+\.\S+/;

  if (!regex.test(email)) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }

  if (!password || password.length < 6) {
    return res.status(400).json({
      message: '"password" must be at least 6 characters long',
    });
  }

  return next();
};
