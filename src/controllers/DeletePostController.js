// file system
const path = require("path");
const fs = require("fs/promises");

const Post = require("../models/Post");

class DeletePostController {
  async exec(req, res) {
    try {
      const id = req.params.id;
      const key = req.query.key;

      await Post.deleteOne({
        _id: id,
      });

      // Remove file in temp dir
      const filePath = path.resolve(
        __dirname,
        "..",
        "..",
        "tmp",
        "uploads",
        key
      );
      await fs.unlink(filePath);

      res.send();
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}

module.exports = new DeletePostController();
