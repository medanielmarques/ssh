import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())

import CryptoJs from 'crypto-js'
import aes from 'crypto-js/aes'
const encBaseUTF8 = CryptoJs.enc.Utf8

import http from 'http'
const server = http.createServer(app)

import { Server } from 'socket.io'
const io = new Server(server)

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('priv message', (args) => {
    const decrypted = aes.decrypt(args.idk, 'pass').toString(encBaseUTF8)

    console.log(decrypted)
  })
})

server.listen(3000, () => {
  console.log('listening on *:3000')
})
