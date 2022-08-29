import { AddPostUseContext } from './addPost/AddPostContext'
import { ListPostUseContext } from './listPosts/ListPostsContext'
import React from 'react'

export const BlogWithServer = () => {
  return (
    <div>
      <AddPostUseContext />
      <ListPostUseContext />
    </div>
  )
}
