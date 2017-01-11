const express = require ('express'),
      path = require ('path'),
      app = express ()

app.set ('view engine', 'pug')
app.get ('/', (req, res) => {
    res.render ('index')
})
