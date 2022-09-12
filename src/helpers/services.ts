import { BlogData } from '../pages/BlogWithServer/addPost/PostContext'

type InputData = {
  title: string
  postText: string
  category: string
}

export const getPosts = `${process.env.REACT_APP_URL_BLOG}articles`
export const getPostDetail = process.env.REACT_APP_URL_BLOG

export const services = {
  blog: {
    list: async () => {
      const response = await fetch(getPosts)
      if (!response.ok) throw new Error('Server side error')
      return (await response.json()) as BlogData[]
    },
    addNewPost: async (post: InputData) => {
      const response = await fetch(getPosts, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(post),
      })
      if (!response.ok) throw new Error('Server side error')
      return (await response.json()) as BlogData
    },
    getPost: async (blogSlug: string) => {
      const response = await fetch(`${getPostDetail}articles/${blogSlug}`)
      if (!response.ok) throw new Error('Server side error')
      return (await response.json()) as BlogData
    },
    deletePost: async (blogSlug: string) => {
      const response = await fetch(`${getPostDetail}articles/${blogSlug}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!response.ok) throw new Error('Server side error')
      return (await response.json()) as BlogData
    },
  },
}
