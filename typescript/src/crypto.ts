import CryptoJs from 'crypto-js'
import aes from 'crypto-js/aes'

export const crypto = () => {
  const encodeUTF8 = CryptoJs.enc.Utf8
  const privateKey = 'privateKey'

  const encryptMessage = (message: string) => {
    return aes.encrypt(message, privateKey)
  }

  const decryptMessage = (message: string) => {
    return aes.decrypt(message, privateKey).toString(encodeUTF8)
  }

  return { decryptMessage, encryptMessage }
}
