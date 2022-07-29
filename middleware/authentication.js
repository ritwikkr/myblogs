import jwt from "jsonwebtoken";

function authentication(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      throw new Error("UnAuthorized");
    }
    const token = authHeader.split(" ")[1];
    // console.log(typeof token);
    // console.log("A:", authHeader);
    const response = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("JWT RESPONSE:", response);
    req.user = { userId: response.userId };
    next();
  } catch (error) {
    console.log("JWT ERROR:", error);
    res.status(401).json(error);
  }
}

export { authentication };
