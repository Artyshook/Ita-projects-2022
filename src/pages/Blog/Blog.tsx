import { AddPostForm } from './AddPostForm'
import { CgAddR } from 'react-icons/cg'
import { Link_GoBack } from './BlogPage'
import { PostCard } from './PostCard'
import { convertToSlug, useLocalStorage } from '../../helpers/functions'
import { coverArr } from '../../helpers/data'
import { genericHookContextBuilder } from '../../helpers/genericHookContextBuilder'
import { theme } from '../../helpers/theme'
import { urls } from '../../helpers/urls'
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

export const { ContextProvider: BlogContextProvider, Context: BlogContext } =
  genericHookContextBuilder(useLogicState)

export const BlogUseContext = () => {
  return (
    <BlogContextProvider>
      <Blog />
    </BlogContextProvider>
  )
}

export const Blog = () => {
  const logic = useContext(BlogContext)

  return (
    <>
      <Link_GoBack to={urls.home}>
        <span> ← </span> <span>Go Back</span>
      </Link_GoBack>
      <Div_Wrapper>
        <H1>All Articles</H1>
        <p>an amazing place to make yourself productive and have fun with daily updates.</p>
        <Button_MyButton onClick={() => logic.setFormShown(true)}>
          <CgAddR size='2rem' />
          <div>Add your post</div>
        </Button_MyButton>
        <AddPostForm />
        <GridContainer>
          {logic.formData.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </GridContainer>
      </Div_Wrapper>
    </>
  )
}

const Div_Wrapper = styled.div`
  max-width: 1140px;
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`

const GridContainer = styled.div`
  padding-top: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

export const Button_MyButton = styled.button`
  font-size: 1.5rem;
  border-radius: 20px;
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
