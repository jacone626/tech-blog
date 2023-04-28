const { Post } = require('../models');

const postData = [{
    title: "Coding Bootcamp",
    content: "This project was created for the UNC Coding bootcamp",
    user_id: 1,
},
{
    title: "Javascript" ,
    content: "I enjoy the functionality of javascript and think it is the best programming language.",
    user_id: 2,
},
{
    title: "Bootstrap",
    content: "I think every developer should be familiar with bootstrap.",
    user_id: 3,
},
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;