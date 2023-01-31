const { Post } = require('../models');

const postData = [
  {
    title: 'Bookish-Sniffle',
    post_text: 'This is a post',
    user_id: 1,
  },
  {
    title: 'Where-Are-You',
    post_text: 'This is another post',
    user_id: 2,
  },
  {
    title: 'Tech-Talk',
    post_text: 'This is a third post',
    user_id: 3,
  },
  {
    title: 'Billboard-Top-100',
    post_text: 'This is a fourth post',
    user_id: 4,
  },
  {
    title: 'Thinking-Outside-The-Box',
    post_text: 'This is a fifth post',
    user_id: 5,
  },
  {
    title: 'Exploration-Station',
    post_text: 'This is a sixth post',
    user_id: 6,
  },
  {
    title: 'Digital-Goddess',
    post_text: 'This is a seventh post',
    user_id: 7,
  },
  {
    title: 'Hello-World',
    post_text: 'This is an eighth post',
    user_id: 8,
  },
  {
    title: 'Thanks-a-bunch',
    post_text: 'This is a ninth post',
    user_id: 9,
  },
  {
    title: 'We are the champions',
    post_text: 'This is a tenth post',
    user_id: 10,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
