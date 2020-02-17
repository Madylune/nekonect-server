const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const socket = require('./socket');
let server;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
  res.end('HomePage')
})

server = app.listen(8080, () => console.log('listening on 8080'))

socket.initSocket(server)
const io = socket.getInstance()

io.on('connection', socket => {
  console.log('connected')
  socket.on('eat', () => {
    console.log('Request eat')
    // subprocess.stdout.on('data', (data) => console.log(`data:${data}`))
    // subprocess.stderr.on('data', (data) => console.log(`error:${data}`))
    // subprocess.stderr.on('close', () => console.log("Closed"))
  })
  socket.on('play', () => {
    console.log('Request play')
    // subprocess.stdout.on('data', (data) => console.log(`data:${data}`))
    // subprocess.stderr.on('data', (data) => console.log(`error:${data}`))
    // subprocess.stderr.on('close', () => console.log("Closed"))
  })
  socket.on('sleep', () => {
    console.log('Request sleep')
    // subprocess.stdout.on('data', (data) => console.log(`data:${data}`))
    // subprocess.stderr.on('data', (data) => console.log(`error:${data}`))
    // subprocess.stderr.on('close', () => console.log("Closed"))
  })
})
