const router = require('express').Router();
const { User, Post, Comment } = require('../../models/index');

//Add a comment
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
  
//Find all comments
  router.get("/", async (req, res) => {
      try {
        const commentData = await Comment.findAll({
      });
        res.status(200).json(commentData);
      } catch (err) {
        res.status(500).json(err);
      }
    });
  

  module.exports = router;
  