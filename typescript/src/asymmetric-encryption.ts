import crypto from 'crypto'
import fs from 'fs'

export const encrypt = (content: string) =>
  crypto.publicEncrypt(
    {
      key: fs.readFileSync('public_key.pem', 'utf-8'),
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha256',
    },
    Buffer.from(content)
  )

export const decrypt = (encryptedContent: NodeJS.ArrayBufferView) =>
  crypto.privateDecrypt(
    {
      key: fs.readFileSync('private_key.pem', 'utf8'),
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha256',
    },
    encryptedContent
  )

const message = 'idkdudelul'

const encryptedMessage = encrypt(message)

console.log({ encryptedMessage })
