const http = require('http')
const fs = require('fs')
const port = 3000

module.exports = exports = surf
surf();

function surf(req, res) {
  const swim = (req, res) => {
    let filePath = '.' + req.url;
    const contentType = 'application/json';

    fs.readFile(filePath, function(err, content) {
      if (err) {
        res.writeHead(500);
        res.end(err.code, err);
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
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
