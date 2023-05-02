const sequelize = require('../config/connection');
const seedUser = require('./userData.json');
const seedPost = require('./postData.json')
const seedComment = require('./commentData.json');
const {User, Post, Comment} = require('../models')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(seedUser, {
    individualHooks: true,
    returning: true,
  });

  for (const post of seedPost) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const comment of seedComment) {
    await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedAll();
