// Middleware Imports
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const connection = require('./Model')

// Path Routers
const indexRouter = require('./routes/index');
const aboutRouter = require("./routes/about");
const contributeRouter = require("./routes/contribute");
const donateRouter = require("./routes/donate");
const mapRouter = require("./routes/map");
const receiveRouter = require("./routes/receive");
const SignpRouter=require("./routes/Signup");
const LoginRouter=require("./routes/Login");
const DashboardRouter=require("./routes/Dashboard");





const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// App Routing
app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/home', indexRouter);
app.use('/about', aboutRouter);
app.use('/contribute', contributeRouter);
app.use('/donate', donateRouter);
app.use('/map', mapRouter);
app.use('/receive', receiveRouter);
app.use('/recieve', receiveRouter);
app.use('/Signup', SignpRouter);
app.use('/Login',LoginRouter);
app.use('/Dashboard',DashboardRouter);
//app.use('/Login_Layout',Login_LayoutRouter)

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
