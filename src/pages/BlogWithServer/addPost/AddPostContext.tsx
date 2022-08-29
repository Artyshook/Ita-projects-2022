import { AddPost } from './AddPost'
import { Blog, BlogData } from '../../Blog/Blog'
import { convertToSlug, useLocalStorage } from '../../../helpers/functions'
import { coverArr } from '../../../helpers/data'
import { genericHookContextBuilder } from '../../../helpers/genericHookContextBuilder'
import { v1 } from 'uuid'
import React, { useContext, useState } from 'react'

const useLogicState = () => {
  const [formShown, setFormShown] = useState(false)
  const [formData, setFormData] = useLocalStorage('blog', [] as BlogData[])
  const [title, setTitle] = useState('')
  const [postText, setPostText] = useState('')
  const [category, setCategory] = useState('' as string)
  const [error, setError] = useState(null as string | null)

  const url = convertToSlug(title)
  const cover2 = coverArr[category]

  const resetStates = () => {
    setTitle('')
    setPostText('')
    setCategory('')
  }

  const setData = () => {
    setFormData(prevData => [
      {
        id: v1(),
        title: title,
        url: url,
        post: postText,
        category: category,
        cover: cover2,
      },
      ...prevData,
    ])
    setFormShown(false)
    resetStates()
  }

  const inputCheck = () => {
    if (formData.find(el => el.url === title.trim())) {
      setError('a similar title already exists, please type another')
    } else if (!category) {
      setError('please select a category')
    } else if (!postText.trim()) {
      setError('the article was not entered ')
    } else {
      setData()
    }
  }

  return {
    formData,
    setFormData,
    formShown,
    setFormShown,
    title,
    setTitle,
    postText,
    setPostText,
    category,
    setCategory,
    inputCheck,
    error,
    setError,
    resetStates,
  }
}

export const { ContextProvider: AddBlogContextProvider, Context: AddPostContext } =
  genericHookContextBuilder(useLogicState)

export const AddPostUseContext = () => {
  return (
    <AddBlogContextProvider>
      <AddPost />
    </AddBlogContextProvider>
  )
}
