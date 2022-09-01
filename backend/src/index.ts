// import * as dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import fs from 'fs'
// import mongoose from 'mongoose'

const app = express()
const port = 1234
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log('Connected to MongoDB'))
  .catch((err: any) => console.log(err))

app.use(cors())

type Users = {
  id: string
  name: string
  city: string
  gender: string
}
const unification = (name: string) =>
  name.toLowerCase().trim().replace(/ +/g, '').replace(/[y]/g, 'i')

// app.get('/', (req, res, next) => {
//   try {
//     const dataString = fs.readFileSync(`${__dirname}/../data.json`, 'utf-8')
//     const data = JSON.parse(dataString).users
//
//     res.send(
//       data.filter((user: Users) =>
//         unification(user.name).includes(unification(req.query.search!.toString()))
//       )
//     )
//   } catch (error) {
//     console.log(error)
//     res.sendStatus(400)
//   }
// })

// app.post('/articles/', (req, res) => {
//   const newPost = new Post(req.body)
//   try {
//   } catch (error) {
//     console.log(error)
//     res.sendStatus(400)
//   }
// })

app.post('/', (req, res, next) => {
  try {
    const data = req.body
  } catch (error) {
    console.log(error)
    res.sendStatus(400)
  }
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
