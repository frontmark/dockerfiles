const http = require('http')
const process = require('process')

try {
  const req = http.request({
    host: 'localhost',
    path: '/servicename',
    method: 'OPTIONS',
    port: 8080,
    timeout: 5000
  }, (res) => {
    res.on('data', function (chunk) {})
    res.on('end', () => {
      if (!res.complete) { process.exit(1) } else {
        if (res.statusCode === 200) {
          process.exit(0)
        } else {
          process.exit(1)
        }
      }
    })
  }).end()
  req.on('timeout', () => {
    process.exit(1)
  })
} catch {
  process.exit(1)
}
