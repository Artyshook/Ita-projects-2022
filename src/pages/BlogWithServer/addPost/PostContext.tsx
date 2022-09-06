import { AddPostForm } from './AddPostForm'
import { CgAddR } from 'react-icons/cg'
import { Link_GoBack } from '../../Blog/BlogPage'
import { PostCard2 } from './PostCard'
import { addNewPost, deletePostBySlug, listAllPosts } from '../../../helpers/services'
import { genericHookContextBuilder } from '../../../helpers/genericHookContextBuilder'
import { theme } from '../../../helpers/theme'
import { urls } from '../../../helpers/urls'
import { useAsyncComponentDidMount } from '../../../helpers/UseComponentDidMount'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'

export type BlogData = {
  id: string
  title: string
  post: string
  slug: string
  category: string
  cover: string
}

const useLogicState = () => {
  const [formShown, setFormShown] = useState(false)
  const [data, setData] = useState([] as BlogData[])
  const [title, setTitle] = useState('')
  const [postText, setPostText] = useState('')
  const [category, setCategory] = useState('' as string)
  const [error, setError] = useState(null as string | null)
  const [loading, setLoading] = useState(false)

  useAsyncComponentDidMount(async () => {
    setLoading(true)
    try {
      setData(await listAllPosts())
      setError(null)
      setLoading(false)
    } catch (error) {
      setError(`fetching error`)
    }
  })

  const resetStates = () => {
    setTitle('')
    setPostText('')
    setCategory('')
  }

  const addPost = async () => {
    try {
      setLoading(true)
      setError(null)
      const postData = { title, postText, category }
      const response = await addNewPost(postData)
      setData(await listAllPosts())
    } catch (err) {
      if (err) setError('Can`t fetch data')
    } finally {
      setLoading(false)
      setFormShown(false)
      resetStates()
    }
  }

  const deleteBySlug = async (slug: string) => {
    try {
      setLoading(true)
      const response = await deletePostBySlug(slug)
      setError(null)
      setLoading(false)
      setData(await listAllPosts())
    } catch (error) {
      setError(`fetching error`)
    }
  }

  const inputCheck = () => {
    if (data.find(el => el.slug === title.trim())) {
      setError('a similar title already exists, please type another')
    } else if (!category) {
      setError('please select a category')
    } else if (!postText.trim()) {
      setError('the article was not entered ')
    } else {
      addPost()
    }
  }

  return {
    data,
    setData,
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
    deleteBySlug,
  }
}

export const { ContextProvider: AddBlogContextProvider, Context: AddPostContext } =
  genericHookContextBuilder(useLogicState)

export const AddPostUseContext = () => {
  return (
    <AddBlogContextProvider>
      <BlogWithServer />
    </AddBlogContextProvider>
  )
}

export const BlogWithServer = () => {
  const logic = useContext(AddPostContext)

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
          {logic.data
            ? logic.data.map(post => (
                <PostCard2 key={post.id} post={post} deleteBySlug={logic.deleteBySlug} />
              ))
            : null}
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
