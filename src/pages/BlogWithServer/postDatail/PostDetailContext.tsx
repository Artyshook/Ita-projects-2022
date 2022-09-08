import { BlogData } from '../addPost/PostContext'
import { DetailPost } from './PostDetail'
import { genericHookContextBuilder } from '../../../helpers/genericHookContextBuilder'
import { services } from '../../../helpers/services'
import { useAsyncComponentDidMount } from '../../../helpers/UseComponentDidMount'
import { useParams } from 'react-router'
import React, { useState } from 'react'

const useLogicState = () => {
  const params = useParams()
  const [blogData, setBlogData] = useState(null as BlogData | null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null as string | null)

  useAsyncComponentDidMount(async () => {
    try {
      setLoading(true)
      const response = await services.blog.getPost(params.blogSlug!)
      setError(null)
      setBlogData(response[0])
    } catch (error) {
      setError(`fetching error`)
    }
    setLoading(false)
  })

  return {
    blogData,
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
