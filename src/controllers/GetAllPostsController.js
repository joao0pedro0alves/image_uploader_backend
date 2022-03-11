const Post = require("../models/Post");

class GetAllPostsController {
  async exec(req, res) {
    const posts = await Post.find();
    res.json(posts);
  }
}

module.exports = new GetAllPostsController();
