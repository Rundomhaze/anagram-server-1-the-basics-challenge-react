require('@babel/register');

const express = require('express');
const path = require('path');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const { sequelize } = require('./db/models');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(PORT, async () => {
  console.log(`Сервер шуршит на порту ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('База данных подключена!')
  } catch (error) {
    console.log(error.message); // new Error('mymessage');
  }
});
