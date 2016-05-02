var koa = require('koa')
var app = koa()
var fs = require('fs')

var blackCards = JSON.parse(fs.readFileSync('./cards/black.json').toString())

// response time
app.use(function *(next) {
  if (this.path === '/') {
    this.body = 'Welcome to Cards For Humanity!'
  } else {
    yield next
  }
})

app.use(function *(next) {
  if (this.path === '/black') {
    this.body = blackCards[69].text
  }
})

// listen on port 3000
console.log('Listening on port 3000')
app.listen(3000)
