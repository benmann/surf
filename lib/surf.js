const http = require('http')
const fs = require('fs')

module.exports = exports = surf

function surf(host, port, file) {
  const swim = (req, res) => {
    const contentType = 'application/json'

    if (!file) {
      target = '.' + req.url
    } else {
      target = file
    }

    fs.readFile(target, function(err, content) {
      if (err) {
        res.writeHead(500)
        res.end(err.code, err)
        res.end()
      } else {
        res.writeHead(200, { 'Content-Type': contentType })
        res.end(content, 'utf-8')
      }
    })
  }

  const server = http.createServer(swim)
  server.listen(port, (err) => {
    if (err) {
      return console.log(err)
    }
    console.log(`>> Surfing on wave 127.0.0.1:${port} 🏄`)
  })
}
