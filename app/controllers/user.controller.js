//public access
exports.allAccess = (req, res) => {
  res.status(200).send("Public content");
};

//logged in users
exports.userBoard = (req, res) => {
  res.status(200).send("User content");
};

//admin users
exports.adminBoard = (req, res) => {
  res.status(200).send("Admin content");
};
