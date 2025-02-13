const express = require("express");
const router = express.Router();
const { Register } = require("../controller/User.controller");

router.post("/signup", Register);

module.exports = router;
