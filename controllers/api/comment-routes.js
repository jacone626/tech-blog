const router = require('express').Router();
const { Comment } = require('../../models/index');
const withAuth = require("../../utils/auth");

//Add a comment
router.post("/", withAuth, async (req, res) => {
    try {    
      const comment = await Comment.create({
        content: req.body.content,
        post_id: req.body.post_id,
        user_id: req.session.user_id
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
  