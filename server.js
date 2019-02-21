var http = require('http')

var server = http.createServer().listen(3001)
var urlParser = require('url')

console.log('I\'m listening on port: 3001')

server.on('request', function (request, response) {
  console.log(request.url)

  var urlObj = urlParser.parse(request.url) //
  var pathname = urlObj.pathname // parsing our the important info in the url

  console.log('requested: ' + pathname)

  response.writeHead(200, {
    'Content-Type': 'text/html'
  })

  if (pathname === '/fun-times') {
    response.write('<h1>Fun Times</h1>')
    response.write('<ul></ul>')
    response.write('<li>Riding Bikes</li>')
    response.write('<li>Playing with Dogs</li>')
    response.write('<ul></ul>')
  } else if (pathname === '/movies') {
    response.write('<h1>Favorite Movies</h1>')
    response.write('<ul></ul>')
    response.write('<li>Star Wars</li>')
    response.write('<li>Bad Boys</li>')
    response.write('<ul></ul>')
  } else if (pathname === '/portfolio') {
    response.write('<h1>Coming Soon</h1>')
  }

  response.write('<html>Hello World!')
  response.write(`<script>console.log("I'm client-side JavaScript being sent via server-side JavaScript");</script>`)
  response.write('</html>')
  response.end()
})