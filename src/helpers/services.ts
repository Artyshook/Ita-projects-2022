import { BlogData } from '../pages/BlogWithServer/addPost/PostContext'

type InputData = {
  title: string
  postText: string
  category: string
}

export const services = {
  blog: {
    list: async (): Promise<BlogData[]> => {
      const response = await fetch(`${process.env.REACT_APP_URL_GET_ARTICLES}`)
      if (!response.ok) throw new Error('Server side error')
      return await response.json()
    },
    addNewPost: async (post: InputData): Promise<BlogData> => {
      const response = await fetch(`${process.env.REACT_APP_URL_GET_ARTICLES}`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(post),
      })
      if (!response.ok) throw Error('Server side error')
      return await response.json()
    },
    getPost: async (blogSlug: string): Promise<BlogData[]> => {
      const response = await fetch(`${process.env.REACT_APP_URL_GET_ARTICLES_DETAIL}${blogSlug}`)
      if (!response.ok) throw new Error('Server side error')
      return await response.json()
    },
    deletePost: async (blogSlug: string): Promise<BlogData> => {
      const response = await fetch(`${process.env.REACT_APP_URL_GET_ARTICLES_DETAIL}${blogSlug}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!response.ok) throw Error('Server side error')
      return await response.json()
    },
  },
}

// export const addNewPost = async (post: InputData): Promise<BlogData> => {
//   const response = await fetch(`${process.env.REACT_APP_URL_GET_ARTICLES}`, {
//     method: 'POST',
//     headers: { 'content-type': 'application/json' },
//     body: JSON.stringify(post),
//   })
//   if (!response.ok) throw Error('Server side error')
//   return await response.json()
// }
//
// export const listAllPosts = async (): Promise<BlogData[]> => {
//   const response = await fetch(`${process.env.REACT_APP_URL_GET_ARTICLES}`)
//   if (!response.ok) throw new Error('Server side error')
//   return await response.json()
// }
//
// export const getPostBySlug = async (blogSlug: string): Promise<BlogData[]> => {
//   const response = await fetch(`${process.env.REACT_APP_URL_GET_ARTICLES_DETAIL}${blogSlug}`)
//   if (!response.ok) throw new Error('Server side error')
//   return await response.json()
// }
//
// export const deletePostBySlug = async (blogSlug: string): Promise<BlogData> => {
//   const response = await fetch(`${process.env.REACT_APP_URL_GET_ARTICLES_DETAIL}${blogSlug}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//   if (!response.ok) throw Error('Server side error')
//   return await response.json()
// }
