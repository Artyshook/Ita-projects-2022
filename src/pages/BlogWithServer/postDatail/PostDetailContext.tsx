import { BlogData } from '../../Blog/Blog'
import { DetailPost } from './PostDetail'
import { genericHookContextBuilder } from '../../../helpers/genericHookContextBuilder'
import { useLocalStorage } from '../../../helpers/functions'
import { useParams } from 'react-router'
import React, { useContext, useState } from 'react'

const useLogicState = () => {
  const params = useParams()
  const [blogData, setBlogData] = useLocalStorage('blog', [] as BlogData[])

  const blog = blogData?.find(post => post.url === params.blogSlug)

  return {
    blogData,
    setBlogData,
    blog,
  }
}

export const { ContextProvider: DetailBlogContextProvider, Context: DetailPostContext } =
  genericHookContextBuilder(useLogicState)

export const DetailPostUseContext = () => {
  return (
    <DetailBlogContextProvider>
      <DetailPost />
    </DetailBlogContextProvider>
  )
}
