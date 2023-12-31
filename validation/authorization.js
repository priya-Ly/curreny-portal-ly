const jwt=require('jsonwebtoken')
const SUPERADMIN=4;
const ADMIN=2
const User=1;
//users role


const minimumPermissionLevelAcquired = (required_permission_level) => {
    return (req, res, next) => {
      let user_permission_level = parseInt(req.jwt.permissionLevel);
      let user_id = req.jwt.user;

      if ((user_permission_level & required_permission_level)  ) {
        return next();
      }else {
        return res.status(403).send();
      }
    };
  };

  const validJwt = async (req, res, next) => {
    console.log("inside try");
    const authorizationHeader = req.headers["authorization"];
    if (!authorizationHeader) {
      return res
        .status(404)
        .send({ message: "Authorization haeders are missing" });
    }
    let authorization = authorizationHeader.split(" ");
    if (authorization[0] !== "Bearer") {
      return res
        .status(404)
        .send({ message: "Bearer not provided in auth headers" });
    }
    let token = authorization[1];
    try {
      const decodedToken = jwt.verify(token, "secret key");
      req.jwt = decodedToken;
      console.log("validdd");
      return next();
      // res.status(200)
      // .send({success:true,message:'You are having valid jwt token'})
    } catch (err) {
      // If the token verification fails, return a Forbidden status (403)
      return res.status(403).send({
        mesage: "Forbidden: Invalid or expired token",
        error: err.message,
      });
    }
  };
  module.exports={
    minimumPermissionLevelAcquired,
    validJwt
  }

