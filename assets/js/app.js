require('../css/app.scss');

let $ = require('jquery');

let greet = require('./greet');
$(document).ready(function () {
   $('body').prepend('<h1>' + greet('Aza') + '</h1>');
});