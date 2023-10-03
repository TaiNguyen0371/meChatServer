const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) res.status(401).json({ message: "Can't find token" });
  console.log(token);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
    if (err) {
      res.status(403).json({ message: "Token not correct" });
    } else {
      next();
    }
  });
};
module.exports = { verifyToken };
