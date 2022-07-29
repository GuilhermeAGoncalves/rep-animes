import DBError from "../err/dbErro.js";

const erroHandle = (error, req, res, next) => {
  if (error instanceof DBError) {
    res.status(400).json("bad request");
  } else if (error) {
    next(error);
  } else {
    next();
  }
};

export default erroHandle;
