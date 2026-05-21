const {
  signupService,
  signinService,
} = require("../services/auth.service");

exports.signup = async (req, res) => {
  try {

    console.log("SIGNUP BODY:", req.body);

    const result = await signupService(req.body);

    res.status(201).json(result);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

exports.signin = async (req, res) => {
  try {

    console.log("SIGNIN BODY:", req.body);

    const result = await signinService(req.body);

    res.status(200).json(result);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};