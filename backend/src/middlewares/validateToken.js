const { verifyToken } = require("../auth/authToken");

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(verifyToken(authorization));

    if (!authorization) {
      return res.status(401).json({ message: "Token not found" });
    }

    const { payload } = verifyToken(authorization);
  console.log("2", payload);
    req.payload = payload;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Expired or invalid token" });
  }
};
