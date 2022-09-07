import { BlogData } from '../addPost/PostContext'
import { DetailPost } from './PostDetail'
import { genericHookContextBuilder } from '../../../helpers/genericHookContextBuilder'
import { getPostBySlug } from '../../../helpers/services'
import { useAsyncComponentDidMount } from '../../../helpers/UseComponentDidMount'
import { useParams } from 'react-router'
import React, { useState } from 'react'

const useLogicState = () => {
  const params = useParams()
  const [data, setData] = useState({} as BlogData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null as string | null)

  useAsyncComponentDidMount(async () => {
    try {
      setLoading(true)
      const response = await getPostBySlug(params.blogSlug!)
      setError(null)
      setData(response[0])
    } catch (error) {
      setError(`fetching error`)
    }
    setLoading(false)
  })

  return {
    data,
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
