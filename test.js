var express = require('express');
 var app = express();
 app.get('/hello', function (req, res) {
   let name = req.query.name || "<unknown>";
   res.send(`Hello there ${name}`);
});
 app.listen(3000, function () {
   console.log('Listening on port 3000!');
});