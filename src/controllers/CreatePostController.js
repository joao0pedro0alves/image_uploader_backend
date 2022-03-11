const Post = require("../models/Post");

class CreatePostController {
  async exec(req, res) {
    const { originalname: name, size, filename: key } = req.file;

    const post = await Post.create({
      name,
      size,
      key,
      url: `${process.env.SERVER_PROTOL}://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/files/${key}`,
    });

    res.json(post);
  }
}

module.exports = new CreatePostController();
