const mongoose = require('mongoose');

const app = require('./app');

const port = process.env.PORT || 80;

const database = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log("We're connected!");
  app.listen(port, () => {
    console.log('Listening on port...', port);
  });
});
