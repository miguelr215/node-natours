const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

// environment variables
// set by express
// console.log(app.get('env'));
// set by node.js
// console.log(process.env);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'))
  .catch((err) => {
    console.log(`something went wrong:`, err);
  });
// .then((con) => {
//   console.log(con.connections);
//   console.log('DB connection successful!');
// });

// const tourSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'A name is required'],
//     unique: true,
//   },
//   rating: {
//     type: Number,
//     default: 4.5,
//   },
//   price: {
//     type: Number,
//     required: [true, 'A price is required'],
//   },
// });

// const Tour = mongoose.model('Tour', tourSchema);

// const testTour = new Tour({
//   name: 'The Rock Climbing Adventure',
//   rating: 4.9,
//   price: 797,
// });

// testTour
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log('ERROR 💥:', err);
//   });

// START SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on ${port}...`);
});
