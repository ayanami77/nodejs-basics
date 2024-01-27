const authPage = (permissions) => {
  return (req, res, next) => {
    const userRole = req.body.role;
    if (permissions.includes(userRole)) {
      next();
    } else {
      return res.status(401).json("You dont have permission!");
    }
  };
};

const authCourse = (req, res, next) => {
  res.json("You are not permitted");
  next();
};

module.exports = { authPage, authCourse };
