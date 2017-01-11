const express = require ('express'),
      serveFavicon = require ('serve-favicon'),
      path = require ('path'),
      app = express ()

app.set ('view engine', 'pug')
app.use (serveFavicon (path.join (__dirname, 'public/favicon.ico')))
app.get ('/', (req, res) => {
    res.render ('index')
})
