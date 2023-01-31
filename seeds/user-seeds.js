const { User } = require('../models');

const userData = [
  {
    username: 'joe_blow',
    email: 'joe_blow22@gmail.com',
    twitter: 'joe_blow22',
    github: 'joe_blow22',
    password: 'password12345',
  },
  {
    username: 'jane_doe',
    email: 'djane909@hotmail.com',
    twitter: 'jane_doe',
    github: 'jane_doe',
    password: 'pass9089',
  },
  {
    username: 'jimmy_john',
    email: 'johnjimmy1@yahoo.com',
    twitter: 'jimmy_john',
    github: 'jimmy_john',
    password: 'wordpass123',
  },
  {
    username: 'crypto_king',
    email: 'ckingcoins@outlook.com',
    twitter: 'crypto_king',
    github: 'crypto_king',
    password: 'compass123',
  },
  {
    username: 'craig_lee',
    email: 'cjlee01@yahoo.com',
    twitter: 'craig_lee',
    github: 'craig_lee',
    password: 'masterpass123',
  },
  {
    username: 'billy_bob',
    email: 'billybill_100@gmail.com',
    twitter: 'billy_bob',
    github: 'billy_bob',
    password: 'canada123',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
