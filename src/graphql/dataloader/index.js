import fs from 'fs'
import path from 'path'

const root = path.join(__dirname)

const dataLoader = {}

fs.readdirSync(root).forEach(filename => {
  const moduleName = filename.replace('.js', '')
  const item = require(path.join(root, filename))
  dataLoader[moduleName] = item
})

export default dataLoader
