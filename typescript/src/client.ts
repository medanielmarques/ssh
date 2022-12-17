import { io } from 'socket.io-client'
import { crypto } from './crypto'

const socket = io('http://localhost:3000', {
  reconnection: true,
})

const { encryptMessage } = crypto()
const encryptedMessage = encryptMessage('my message')

setInterval(() => {
  socket.emit('priv message', {
    idk: encryptedMessage.toString(),
  })
}, 1000)
