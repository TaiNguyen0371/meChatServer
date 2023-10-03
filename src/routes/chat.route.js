const express = require("express");
const chatController = require("../controllers/chat.controller");
const { verifyToken } = require("../middlewares");
const route = express.Router();
route.get("/chatList/:idUser", verifyToken, chatController.getChatList);
module.exports = route;
