import { getValidToken } from "../service/tokenService.js";

const authorizationMiddleware = async (req, res, next) => {
  const tokenId = req.headers["Authorization"];

  try {
    await getValidToken(tokenId);
  } catch (erro) {
    res.status(403).json("unauthorized");
  }

  next();
};

export default authorizationMiddleware;
