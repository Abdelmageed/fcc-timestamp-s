const express = require ('express'),
      serveFavicon = require ('serve-favicon'),
      path = require ('path'),
      app = express ()

app.set ('view engine', 'pug')
app.use (serveFavicon (__dirname + '/public/favicon.ico'))
app.get ('/', (req, res) => {
    res.render ('index')
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
