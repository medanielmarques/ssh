import { io } from './app'
import { crypto } from './crypto'

io.on('connection', (socket) => {
  socket.on('priv message', (args) => {
    const { decryptMessage } = crypto()

    console.log(decryptMessage(args.idk))
  })
})
