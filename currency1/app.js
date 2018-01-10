var express = require('express');
var routes = require('./routes/index');
var exp_hbs = require('express-handlebars');

var app = express();

ap.engine('hbs', exp_hbs({extname:'.hbs'}));
app.set('view engine', '.hbs');

app.use('/', routes);

app.listen(process.env.PORT || 3000, function () {
  console.log('Currency app running on port 3000');
});

module.exports = app;