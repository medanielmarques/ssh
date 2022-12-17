import express from 'express'
import cors from 'cors'
import http from 'http'
import { Server } from 'socket.io'

const app = express()
app.use(cors())

const server = http.createServer(app)

server.listen(3000, () => {
  console.log('listening on port *:3000')
})

const io = new Server(server)

export { io }
