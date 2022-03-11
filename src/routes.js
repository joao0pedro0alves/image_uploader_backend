// express
const express = require("express");
const path = require("path");

// multer
const multer = require("multer");
const multerConfig = require("./config/multer");

// controllers
const getAllPostsController = require("./controllers/GetAllPostsController");
const createPostController = require("./controllers/CreatePostController");
const deletePostController = require("./controllers/DeletePostController");

const routes = express.Router();

// post routes
routes
  .route("/posts/:id?")
  .get(getAllPostsController.exec)
  .post(multer(multerConfig).single("file"), createPostController.exec)
  .delete(deletePostController.exec);

// files path
routes.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);

module.exports = routes;
