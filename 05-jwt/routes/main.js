const express = require("express");
const routes = express.Router();

const { login, dashboard } = requier("../controllers/main.js");

router.route("/dashoboard").get(dashboard);
router.route("/login").post(login);

module.exports = router;
