const router = require('express').Router();
const { Comment } = require('../../models/index');

router.post("/", async (req, res) => {
    try {    
      const comment = await Comment.create({
        content: req.body.comment,
        post_id: req.session.post_id,
        user_id: req.session.user_id,
      });
      res.status(200).json(comment);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  // Export the router
  module.exports = router;
  