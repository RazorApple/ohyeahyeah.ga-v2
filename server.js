// server.js
// where your node app starts
'use strict'
// init project

const express = require('express');
const app = express();
//Public files.
app.use(express.static('public'));

//Proto check.
function checkHttps(req, res, next){
 
  
  if(req.get('X-Forwarded-Proto').indexOf("https")!=-1){
    return next()
  } else {
    res.redirect('https://' + req.hostname + req.url);
  }
}
app.all('*', checkHttps);


// HTML index.
var routes = require("./routes.js")(app);
// Launch Express.
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});