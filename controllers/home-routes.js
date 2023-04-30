const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

//Shows the homepage
router.get('/', async (req, res) => {
    try {
      const blogData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });
  
      const posts = blogData.map((post) =>
        post.get({ plain: true })
      );
      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

//Shows specific post
router.get('/post/:id', withAuth, async (req, res) => {
    try {
    const blogData = await Post.findByPk(req.params.id, {
        include: [
            { 
            model: User, 
            attributes: ["username"] 
            },
            {
            model: Comment,
            include: [{ 
                model: User, 
                attributes: ["username"] 
            }],
            },
        ],
        });
    
    const post = blogData.get({ plain: true });
  
      res.render('post', {
        post,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });

//Sign-up page
router.get('/sign-up', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('sign-up');
  });

//Shows all posts from the current user
router.get("/dashboard", withAuth, async (req, res) => {
    try {
      const blogData = await Post.findAll({
        where: { user_id: req.session.user_id },
        include: [
            { 
            model: User, 
            attributes: ["username"] 
            }],
      });
      
      const posts = blogData.map((post) => post.get({ plain: true }));
  
      res.render("dashboard", {
        posts,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

//Shows specific post to edit
  router.get("/edit/:id", async (req, res) => {
    try {
      const blogData = await Post.findByPk(req.params.id, {
        include: [
          { 
            model: User, 
            attributes: ["username"] 
        },
          {
            model: Comment,
            include: [{ model: User, attributes: ["username"] }],
          },
        ],
      });
  
      const post = blogData.get({ plain: true });
  
      res.render("edit-post", {
        post,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

//Make a new post
  router.get("/new-post", (req, res) => {
    if (req.session.loggedIn) {
      res.render("new-post");
      return;
    }
    res.redirect("/login");
  });

module.exports = router;
