const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

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
      // TODO: Send over the 'loggedIn' session variable to the 'homepage' template
      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/post/:id', async (req, res) => {
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
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
