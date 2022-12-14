import { io } from 'socket.io-client'
import { crypto } from './crypto'

const socket = io('http://localhost:3000', {
  reconnection: true,
})

socket.on('connect', () => console.log('connected on the client'))

const { encryptMessage } = crypto()
const encryptedMessage = encryptMessage('my message')

setInterval(() => {
  socket.emit('priv message', {
    idk: encryptedMessage.toString(),
  })
}, 1000)
