const jwt = require("jsonwebtoken");
module.exports = function (req, res, next) {
  try {
    let token = req.headers.authorization.split(" ")[1];
    // return res.status(400).send(token);
    if (!token) {
      return res.status(400).send("Token Not Found");
    }
    let decode = jwt.verify(token, "jwtSecret");
    req.user = decode.user;
    // return res.status(400).send(req.user.id);
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).send("Invalid token");
  }
};
