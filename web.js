var gzippo = require('gzippo');
  var express = require('express');
  var app = express();
  var requi
 
  app.use(express.logger('dev'));
  app.use(gzippo.staticGzip(__dirname ));
  app.listen(process.env.PORT || 5000);
app.get('/', function(req, res) {
    res.sendfile('app/index.html', {root: __dirname })
});

app.get('/bower_components/bootstrap/dist/css/bootstrap.css', function(req, res) {
    res.sendfile('bower_components/bootstrap/dist/css/bootstrap.css', {root: __dirname })
});

app.get('/styles/main.css', function(req, res) {
    res.sendfile('app/styles/main.css', {root: __dirname })
});

app.get('/bower_components/angular/angular.js', function (req, res){
    res.sendfile('/bower_components/angular/angular.js', {root: __dirname})
});

app.get('/bower_components/jquery/dist/jquery.js', function (req, res){
    res.sendfile('/bower_components/jquery/dist/jquery.js', {root: __dirname})
});

app.get('/bower_components/angular-animate/angular-animate.js', function (req, res){
    res.sendfile('/bower_components/angular-animate/angular-animate.js', {root: __dirname})
});

app.get('/bower_components/bootstrap/dist/js/bootstrap.js', function (req, res){
    res.sendfile('/bower_components/bootstrap/dist/js/bootstrap.js', {root: __dirname})
});

app.get('/bower_components/angular-cookies/angular-cookies.js', function (req, res){
    res.sendfile('/bower_components/angular-cookies/angular-cookies.js', {root: __dirname})
});

app.get('/bower_components/angular-resource/angular-resource.js', function (req, res){
    res.sendfile('/bower_components/angular-resource/angular-resource.js', {root: __dirname})
});

app.get('/bower_components/angular-sanitize/angular-sanitize.js', function (req, res){
    res.sendfile('/bower_components/angular-sanitize/angular-sanitize.js', {root: __dirname})
});

app.get('/bower_components/angular-route/angular-route.js', function (req, res){
    res.sendfile('/bower_components/angular-route/angular-route.js', {root: __dirname})
});

app.get('/bower_components/angular-touch/angular-touch.js', function (req, res){
    res.sendfile('/bower_components/angular-touch/angular-touch.js', {root: __dirname})
});

app.get('/bower_components/angular-socialshare/dist/angular-socialshare.min.js', function (req, res){
    res.sendfile('/bower_components/angular-socialshare/dist/angular-socialshare.min.js', {root: __dirname})
});

app.get('/scripts/app.js', function (req, res){
    res.sendfile('/app/scripts/app.js', {root: __dirname})
});

app.get('/bower_components/Chart.js/dist/Chart.js', function (req, res){
    res.sendfile('/bower_components/Chart.js/dist/Chart.js', {root: __dirname})
});

app.get('/scripts/about/about.js', function (req, res){
    res.sendfile('/app/scripts/about/about.js', {root: __dirname})
});

app.get('/scripts/main/main.js', function (req, res){
    res.sendfile('/app/scripts/main/main.js', {root: __dirname})
});

app.get('/scripts/baseServices/apiService.js', function (req, res){
    res.sendfile('/app/scripts/baseServices/apiService.js', {root: __dirname})
});

app.get('/scripts/confirmationPage/paymentConfirmationCtrl.js', function (req, res){
    res.sendfile('/app/scripts/confirmationPage/paymentConfirmationCtrl.js', {root: __dirname})
});

app.get('/scripts/buy/buyCtrl.js', function (req, res){
    res.sendfile('/app/scripts/buy/buyCtrl.js', {root: __dirname})
});

app.get('/scripts/contact/contactCtrl.js', function (req, res){
    res.sendfile('/app/scripts/contact/contactCtrl.js', {root: __dirname})
});






