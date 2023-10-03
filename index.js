const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const http = require("http");
const cors = require("cors");
const app = express();
dotenv.config();
const server = http.createServer(app);
const socketio = require("socket.io");
const routes = require("./src/routes");
const db = require("./src/database");
const socketService = require("./src/services/socket.service");
// const { verifyToken } = require("./src/middlewares/index");
const PORT = process.env.PORT || 3000;
db.connect();
// app.use(verifyToken);
app.use(cors());
app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);
const io = socketio(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});
// Global variables
global._baseDir = __dirname;
global._io = io;
global._io.on("connection", socketService.connection);

server.listen(PORT, () => {
  console.log(`Connecting port: ${PORT}`);
});
