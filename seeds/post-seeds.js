const { Post } = require('../models');

const postData = [
  {
    id: 1,
    title: 'Bookish-Sniffle',
    post_content: 'I love to read!',
    user_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 2,
    title: 'Where-Are-You',
    post_content: 'I am out of this world!',
    user_id: 2,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 3,
    title: 'Tech-Talk',
    post_content: 'Logical and analytical',
    user_id: 3,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
