var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Production
var helmet = require('helmet')
var compression = require('compression');

var index = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// redirect bootstrap assets
app.use('/javascripts', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/stylesheets', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/fonts', express.static(__dirname + '/node_modules/bootstrap/dist/fonts'));

// redirect bootstrap-material assets
app.use('/javascripts', express.static(__dirname + '/node_modules/bootstrap-material-design/dist/js'));
app.use('/stylesheets', express.static(__dirname + '/node_modules/bootstrap-material-design/dist/css'));

// redirect easy-pie-chart js
app.use('/javascripts', express.static(__dirname + '/node_modules/easy-pie-chart/dist'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Production
app.use(compression()); //Compress all routes
app.use(helmet())

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.listen(4501, function() {
    console.log(`
     888888                      888 d8b
       "88b                      888 Y8P
        888                      888
        888  .d88b.  888d888 .d88888 888
        888 d88""88b 888P"  d88" 888 888
        888 888  888 888    888  888 888
        88P Y88..88P 888    Y88b 888 888
        888  "Y88P"  888     "Y88888 888
      .d88P
    .d88P"
   888P"

    --->>> Jordi website app listening on port 4501! <<<---`)
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
