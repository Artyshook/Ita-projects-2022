import cors from 'cors'
import express from 'express'
import fs from 'fs'

type User = {
  id: string
  name: string
  city: string
  gender: string
}

const app = express()
const port = 1234

app.use(cors())

const unification = (value: string) =>
  value.toLowerCase().trim().replace(/ +/g, '').replace(/[y]/g, 'i')

app.get('/', (req, res) => {
  console.log('Volani servera')
  const dataString = fs.readFileSync(`${__dirname}/../data.json`, 'utf-8')
  const data = JSON.parse(dataString).users
  const newData = data.filter((user: User) =>
    unification(user.name).includes(unification(req.query.search!.toString()))
  )
})

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err)
  res.status(500)
  res.json(err)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export {}
