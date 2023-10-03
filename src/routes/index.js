const chatRoute = require("./chat.route");
const express = require("express");
const route = express.Router();
route.use("/api/chat", chatRoute);
module.exports = route;
