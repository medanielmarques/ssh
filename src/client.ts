import { io } from 'socket.io-client'
import aes from 'crypto-js/aes'

const socket = io('http://localhost:3000', {
  reconnection: true,
})

socket.on('connect', () => console.log('connected on the client'))

const encrypted = aes.encrypt('public key', 'pass')

console.log(encrypted.toString())

setInterval(() => {
  socket.emit('priv message', {
    idk: encrypted.toString(),
  })
}, 1000)
