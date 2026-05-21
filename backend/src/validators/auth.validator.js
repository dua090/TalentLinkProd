exports.validateSignup = (req, res, next) => {

  const {
    firstName,
    lastName,
    email,
    password,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !password
  ) {

    return res.status(400).json({
      message: "All fields are required",
    });

  }

  next();
};