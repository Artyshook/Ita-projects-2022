import cors from 'cors'
import express from 'express'
import fs from 'fs'

const app = express()
const port = 1234

app.use(cors())

app.get('/', (req, res) => {
  console.log('někdo volá server')
  const dataString = fs.readFileSync(`${__dirname}/../user.json`, 'utf-8')
  const data = JSON.parse(dataString).users
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app lddsssisteniwng won port ${port}`)
})

console.info('ahooooj')

export {}
