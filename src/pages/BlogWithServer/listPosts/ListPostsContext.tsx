import { BlogData } from '../../Blog/Blog'
import { ListPosts } from './ListPosts'
import { genericHookContextBuilder } from '../../../helpers/genericHookContextBuilder'
import { useLocalStorage } from '../../../helpers/functions'
import React from 'react'

export const useLogicState = () => {
  const [formData, setFormData] = useLocalStorage('blog', [] as BlogData[])

  return {
    formData,
    setFormData,
  }
}

export const { ContextProvider: ListBlogContextProvider, Context: ListPostContext } =
  genericHookContextBuilder(useLogicState)

export const ListPostUseContext = () => {
  return (
    <ListBlogContextProvider>
      <ListPosts />
    </ListBlogContextProvider>
  )
}
