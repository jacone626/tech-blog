const { Comment } = require('../models');

const commentData = [{
    content: "Nice project!",
    post_id: 1,
    user_id: 3,
},
{
    content: "I also like javascript.",
    post_id: 2,
    user_id: 1,
},
{
    content: "Agreed, bootstrap is a useful technology.",
    post_id: 3,
    user_id: 2,
},
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;