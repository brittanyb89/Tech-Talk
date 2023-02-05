const { Post } = require('../models');

const postData = [
  {
    id: 1,
    title: 'Bookish-Sniffle',
    post_content: 'I love to read!',
    user_id: 01,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 2,
    title: 'Where-Are-You',
    post_content: 'I am out of this world!',
    user_id: 02,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 3,
    title: 'Tech-Talk',
    post_content: 'Logical and analytical',
    user_id: 03,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 4,
    title: 'Billboard-Top-100',
    post_content: 'Greatest of all time',
    user_id: 04,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 5,
    title: 'Thinking-Outside-The-Box',
    post_content: 'Open-minded and creative',
    user_id: 05,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 6,
    title: 'Exploration-Station',
    post_content: 'Adventageous and exciting',
    user_id: 06,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 7,
    title: 'Digital-Goddess',
    post_content: 'Proud, strong, and beautiful',
    user_id: 07,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 8,
    title: 'Hello-World',
    post_content: 'Definiitive purpose',
    user_id: 08,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 9,
    title: 'Thanks-a-bunch',
    post_content: 'Nothing but the best!',
    user_id: 09,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 10,
    title: 'We are the champions',
    post_content: 'This girl is on fire!',
    user_id: 010,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
