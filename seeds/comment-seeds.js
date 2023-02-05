const { Comment } = require('../models');

const commentData = [
  {
    user_id: 1,
    post_id: 1,
    comment_text: 'You are a great writer!',
  },
  {
    user_id: 2,
    post_id: 2,
    comment_text: 'I love this post!',
  },
  {
    user_id: 3,
    post_id: 3,
    comment_text: 'I am brilliant!',
  },
  {
    user_id: 4,
    post_id: 4,
    comment_text: 'I have great creativity!',
  },
  {
    user_id: 5,
    post_id: 5,
    comment_text: 'You are awesome!',
  },
  {
    user_id: 6,
    post_id: 6,
    comment_text: 'The future is bright!',
  },
  {
    user_id: 7,
    post_id: 7,
    comment_text: 'Perseverance is key!',
  },
  {
    user_id: 8,
    post_id: 8,
    comment_text: 'I will not give up!',
  },
  {
    user_id: 9,
    post_id: 9,
    comment_text: 'I am a great coder!',
  },
  {
    user_id: 10,
    post_id: 10,
    comment_text: 'My future is promised!',
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
