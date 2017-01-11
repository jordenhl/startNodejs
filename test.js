"use strict";
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/hello', function (req, res) {
   let name = req.query.name || "<unknown>";
   res.send(`Hello there ${name}`);
});


app.listen(app.get('port'), function () {
   console.log('Listening on port 3000!');
});
