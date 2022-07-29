const consoleMiddleware = (req, res, next) => {
  const route = req.path;
  console.log(route);
  next();
};

export default consoleMiddleware;
