const express = require("express");

const router = express.Router();

const {
  protect,
} = require("../middleware/auth.middleware");

router.get(
  "/profile",
  protect,
  (req, res) => {

    res.status(200).json({
      message: "Protected Route Accessed",
      user: req.user,
    });

  }
);

const {
  authorizeRoles,
} = require("../middleware/role.middleware");

router.get(
  "/recruiter-dashboard",

  protect,

  authorizeRoles("RECRUITER"),

  (req, res) => {

    res.status(200).json({
      message: "Recruiter Dashboard Access",
    });

  }
);

module.exports = router;