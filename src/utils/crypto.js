import crypto from 'crypto'

export const md5 = str => {
  return crypto
    .createHash('md5')
    .update(str)
    .digest('hex')
}

export const aesDecrypt = (key, iv, crypted) => {
  crypted = new Buffer(crypted, 'base64')
  key = new Buffer(key, 'base64')
  iv = new Buffer(iv, 'base64')
  const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv)
  let decoded = decipher.update(crypted, 'base64', 'utf8')
  decoded += decipher.final('utf8')
  return decoded
}

export const sha1 = message => {
  return crypto
    .createHash('sha1')
    .update(message, 'utf8')
    .digest('hex')
}
