var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const {debug} = require("puppeteer/lib/cjs/puppeteer/common/Debug");

var app = express();
let die = false;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

function shutDown() {
  console.log('Received kill signal, shutting down gracefully');
  console.log('Power level\'s critical... shutting down the teleporters.');
  server.close(() => {
    console.log('Closed out remaining connections');
    process.exit(0);
  });

  setTimeout(() => {
    console.error('Could not close connections in time, forcefully shutting down');
    process.exit(1);
  }, 10000);
}

// Health and Shutdown are for the load balancers
app.get('/health', async (req, res) => {
  try {
    if (!die) {
      res.status(200).send('Status OKAY :D');
    } else {
      res.status(503).send('Power level\'s critical... shutting down the teleporters.');
    }

  } catch (err) {
    debug(err.stack);
    res.sendStatus(500);
  }
});

app.get('/shutdown', async () => { /*This is probably a dumb way to shut down a server... remind me to fix this later*/
  die = true;
  shutDown()
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
