import { convertToSlug } from '../../src/helpers/functions'
import { coverArr } from '../../src/helpers/data'
import { v1 } from 'uuid'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import fs from 'fs'

const app = express()
const port = 1234

app.use(cors())
app.use(bodyParser.json())

type Post = {
  id: string
  title: string
  post: string
  slug: string
  category: string
  cover: string
}

const unification = (name: string) =>
  name.toLowerCase().trim().replace(/ +/g, '').replace(/[y]/g, 'i')

const getDataFromStorage = (): Post[] => {
  const dataString = fs.readFileSync(`${__dirname}/../data.json`, 'utf-8')
  return JSON.parse(dataString).posts
}

const putDataToStorage = (posts: Post[]) => {
  fs.writeFileSync(`${__dirname}/../data.json`, JSON.stringify({ posts }), 'utf-8')
}

app.get('/articles', (req, res) => {
  res.send(getDataFromStorage())
})

app.post('/articles', (req, res) => {
  const newPost: Post = {
    title: req.body.title,
    id: v1(),
    post: req.body.postText,
    slug: convertToSlug(req.body.title),
    category: req.body.category,
    cover: coverArr[req.body.category],
  }
  const posts = getDataFromStorage()
  putDataToStorage([newPost, ...posts])
  res.send(newPost)
})

app.get('/articles/:blogSlug', (req, res) => {
  const posts = getDataFromStorage()
  const findPostBySlug = posts.find(post => post.slug === req.params.blogSlug)
  res.send(findPostBySlug)
})

app.delete('/articles/:blogSlug', (req, res) => {
  const postsFromStorage = getDataFromStorage()
  const newData = postsFromStorage.filter(post => post.slug !== req.params.blogSlug)
  putDataToStorage(newData)
  res.send(newData)
})

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err)
  res.status(500)
  res.json(err)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
