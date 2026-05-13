const logRequest = (req, res, next) => {
  console.log("Terjadi log ke path", req.path);
  next();
};

export default logRequest;
