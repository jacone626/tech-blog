const router = require('express').Router();
const { Post, Comment, User } = require('../../models/index');
const withAuth = require("../../utils/auth");

//Add a post
router.post("/", withAuth, async (req, res) => {
    try {
      const post = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      res.status(200).json(post);
    } catch (err) {
      res.status(400).json(err);
    }
  });


//Find all posts
router.get("/", async (req, res) => {
    try {
      const blogData = await Post.findAll({
        include: [{ 
            model: User, 
            attributes: ["username"] },
      {
        model: Comment,
        include: {
            model: User,
            attributes: ['username']
            }
        }
    ]
    });
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//Find a specific post
router.get("/:id", async (req, res) => {
    try {
      const blogData = await Post.findByPk(req.params.id, {
        include: [{ 
            model: User, 
            attributes: ["username"] },
          {
            model: Comment,
            include: { 
                model: User, 
                attributes: ["username"] }
          },
        ],
      });
      if (!blogData) {
        res.status(404).json({ message: "No post found with that id!" });
        return;
      }
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//Update a specific post
router.put("/:id", withAuth, async (req, res) => {
    try {
      const updatePost = await Post.update(req.body, {
        where: { id: req.params.id },
      });
  
      if (!updatePost) {
        res.status(404).json({ message: "No post found with that id!" });
        return;
      }
      res.status(200).json(updatePost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//Delete a post
router.delete("/:id", withAuth, async (req, res) => {
    try {
      const deletePost = await Post.destroy({
        where: { id: req.params.id },
      });
  
      if (!deletePost) {
        res.status(404).json({ message: "No post found with that id!" });
        return;
      }
      res.status(200).json(deletePost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;