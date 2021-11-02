const express = require('express')
const nunjuks = require('nunjucks')

const server = express()

server.set('view engine', 'html')
nunjuks.configure('views', {
  express: server
})

server.get('/', (req, res) => res.render('index'))


server.listen(3000)