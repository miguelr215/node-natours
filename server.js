const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

// environment variables
// set by express
// console.log(app.get('env'));
// set by node.js
// console.log(process.env);

// START SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on ${port}...`);
});
