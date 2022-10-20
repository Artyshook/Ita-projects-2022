import { AddPostForm } from './AddPostForm'
import { CgAddR } from 'react-icons/cg'
import { PostCard } from './PostCard'
import { convertToSlug, useLocalStorage } from '../../helpers/functions'
import { coverArr } from '../../helpers/data'
import { genericHookContextBuilder } from '../../helpers/genericHookContextBuilder'
import { theme } from '../../helpers/theme'
import { v1 } from 'uuid'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'

export type BlogData = {
  id: string
  title: string
  post: string
  url: string
  category: string
  cover: string
}

const useLogicState = () => {
  const [formShown, setFormShown] = useState(false)
  const [formData, setFormData] = useLocalStorage('blog', [] as BlogData[])
  const [title, setTitle] = useState('')
  const [postText, setPostText] = useState('')
  const [category, setCategory] = useState('' as string)
  const [error, setError] = useState(null as string | null)

  const slug = convertToSlug(title)
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
        url: slug,
        post: postText,
        category: category,
        cover: cover2,
      },
      ...prevData,
    ])
    setFormShown(false)
    resetStates()
  }

  const letterNumber = /^[0-9a-zA-Z]+$/

  const inputCheck = () => {
    if (!title.trim()) {
      setError('please enter the title')
    } else if (!letterNumber.test(title)) {
      setError('please enter the title in English')
    } else if (formData.find(el => el.url === title.trim())) {
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

export const { ContextProvider: BlogContextProvider, Context: BlogContext } =
  genericHookContextBuilder(useLogicState)

export const BlogUseContext1 = () => {
  return (
    <BlogContextProvider>
      <Blog />
    </BlogContextProvider>
  )
}

export const Blog = () => {
  const logic = useContext(BlogContext)

  return (
    <Div_Wrapper>
      <H1>All Articles</H1>
      <p>an amazing place to make yourself productive and have fun with daily updates.</p>
      <Button_MyButton onClick={() => logic.setFormShown(true)}>
        <CgAddR size='2rem' />
        <div>Add article</div>
      </Button_MyButton>
      <AddPostForm />
      <GridContainer>
        {logic.formData.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </GridContainer>
    </Div_Wrapper>
  )
}

const Div_Wrapper = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  font-size: ${theme.fonts.small};
`

const GridContainer = styled.div`
  padding-top: 1rem;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  ${theme.breakpoint.phone} {
    grid-template-columns: repeat(1, 1fr);
    width: 90%;
  }
`
const Button_MyButton = styled.button`
  font-size: 1.5rem;
  border-radius: 10px;
  border: none;
  color: white;
  background-color: ${theme.background.lightBlue};
  height: 4.5rem;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    background: ${theme.colors.blue2};
  }
`

const H1 = styled.h1`
  font-size: ${theme.fonts.medium};
  color: ${theme.colors.blue};
  font-weight: bold;
`
