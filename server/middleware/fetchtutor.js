const jwt = require("jsonwebtoken");

const requiredLogin = async (req, res, next) => {
  try {
    console.log(req.cookies);
    const token =  req.headers.authorization||req.cookies.authcookie;
    console.log(typeof token);
    if (!token) {
      return res.status(401).json({ error: "Unauthorized - Missing token" });
    }
    const decode = jwt.verify(token, process.env.SECRET_TOKEN);   
    console.log(decode)
    req.user = decode;
    if(decode.role!="tutor"){
        return res.status(401).json({ error: "Unauthorized - Invalid token",success:true});
    }   
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: "Unauthorized - Invalid token" });
  }
};

module.exports = requiredLogin;
