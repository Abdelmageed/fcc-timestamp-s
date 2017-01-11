const express = require ('express'),
      serveFavicon = require ('serve-favicon'),
      path = require ('path'),
      app = express ()

app.set ('view engine', 'pug')
app.use (serveFavicon (__dirname + '/public/favicon.ico'))
app.get ('/', (req, res) => {
    res.render ('index')
})
app.get ('/:time', (req, res) => {
    let unix = parseInt(req.params.time, 10) * 1000,
        date = new Date (unix || req.params.time)
    res.json ({
        unix: null || +(date.getTime () / 1000),
        natural: (date.toDateString () === 'Invalid Date')? null : date.toDateString ()
    })
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
