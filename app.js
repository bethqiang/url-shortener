const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const chalk = require('chalk');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require('./routes'));

const models = require('./models');
const Link = models.Link;

const port = process.env.PORT || 8080;
Link.sync({})
.then(() => {
  app.listen(port, () => {
    console.log(chalk.blue(`Contact from intelligent life received on port ${port}`)
  );
});
})
.catch(console.error);

app.use('/', (err, req, res, next) => {
  console.log(chalk.red('Houston, we have a problem.'));
  console.log(chalk.red(`ERROR: ${err.message}`));
  res.sendStatus(err.status || 500);
});
