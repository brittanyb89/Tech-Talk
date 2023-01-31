const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const PORT = process.env.PORT || 3001;
const app = express();

const sess = {
  secret: 'Super secret secret',
  cookie: {
    // Session will automatically expire in 15 minutes
    expires: 15 * 60 * 1000,
  },
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// turn on sessions
app.use(session(sess));

// turn on routes
app.use(express.json());
app.use(routes);
// turn on express to parse incoming data
app.use(express.urlencoded({ extended: true }));
// turn on static files
app.use(express.static(path.join(__dirname, 'public')));
// turn on handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turnt on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
