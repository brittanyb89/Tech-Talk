const { Comment } = require('../models');

const commentData = [
  {
    user_id: 1,
    post_id: 2,
    comment_text: 'You are a great writer!',
  },
  {
    user_id: 2,
    post_id: 3,
    comment_text: 'I love this post!',
  },
  {
    user_id: 3,
    post_id: 1,
    comment_text: 'I am brilliant!',
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
