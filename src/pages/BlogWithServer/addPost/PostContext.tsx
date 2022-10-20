import { AddPostForm } from './AddPostForm'
import { CgAddR } from 'react-icons/cg'
import { PostCard2 } from './PostCard'
import { genericHookContextBuilder } from '../../../helpers/genericHookContextBuilder'
import { services } from '../../../helpers/services'
import { theme } from '../../../helpers/theme'
import { useAsyncComponentDidMount } from '../../../helpers/UseComponentDidMount'
import { wave } from '../../../WebsitePage/components/home/Home'
import React, { useContext, useState } from 'react'
import styled, { keyframes } from 'styled-components'

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
  const [validationError, setValidationError] = useState(null as string | null)
  const [loading, setLoading] = useState(false)

  useAsyncComponentDidMount(async () => {
    setLoading(true)
    try {
      setData(await services.blog.list())
      setError(null)
      setLoading(false)
    } catch (error) {
      setError(`Database is unavailable`)
    } finally {
      setLoading(false)
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
      setValidationError(null)
      const response = await services.blog.addNewPost({ title, postText, category })
      setData(await services.blog.list())
    } catch (err) {
      setValidationError('Can`t fetch data')
    } finally {
      setLoading(false)
      setFormShown(false)
      setValidationError(null)
      resetStates()
    }
  }

  const deleteBySlug = async (slug: string) => {
    try {
      setLoading(true)
      const response = await services.blog.deletePost(slug)
      setError(null)
      setLoading(false)
      setData(await services.blog.list())
    } catch (error) {
      setError(`fetching error`)
    } finally {
      setLoading(false)
    }
  }

  const letterNumber = /^[0-9a-zA-Z]+$/

  const inputCheck = () => {
    if (!title.trim()) {
      setValidationError('please enter the title')
    } else if (!letterNumber.test(title)) {
      setValidationError('please enter the title in English')
    } else if (data.find(el => el.slug === title)) {
      setValidationError('a similar title already exists, please type another')
    } else if (!category) {
      setValidationError('please select a category')
    } else if (!postText.trim()) {
      setValidationError('the article was not entered ')
    } else addPost()
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
    validationError,
    setValidationError,
    loading,
  }
}

export const { ContextProvider: AddBlogContextProvider, Context: AddPostContext } =
  genericHookContextBuilder(useLogicState)

export const BlogUseContext = () => {
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
      <Div_Wrapper>
        <H1>All Articles</H1>
        <P>an amazing place to make yourself productive and have fun with daily updates.</P>
        {logic.loading ? (
          <MessageError>
            <Loading>⌛</Loading>
            <Loading>⌛</Loading>
            <Loading>⌛</Loading>
          </MessageError>
        ) : (
          <div>
            {logic.error ? (
              <MessageError>
                <P>
                  Database is unavailable <br />
                  Make sure you download the repository from
                  {
                    <A href='https://github.com/Artyshook/Ita-projects-2022/tree/main/src/pages/BlogWithServer'>
                      👉 here{' '}
                    </A>
                  }
                  and run it on localhost
                </P>
              </MessageError>
            ) : (
              <>
                <Button_MyButton onClick={() => logic.setFormShown(true)}>
                  <CgAddR size='2rem' />
                  <div>Add your post</div>
                </Button_MyButton>
                <AddPostForm />
                <GridContainer>
                  {logic.data?.map(post => (
                    <PostCard2 key={post.id} post={post} deleteBySlug={logic.deleteBySlug} />
                  ))}
                </GridContainer>
              </>
            )}
          </div>
        )}
      </Div_Wrapper>
    </>
  )
}

const Loading = styled.span`
  font-size: ${theme.fonts.small};
  animation-name: ${wave};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`

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
  ${theme.breakpoint.phone} {
    grid-template-columns: repeat(1, 1fr);
    width: 90%;
  }
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
const P = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-size: ${theme.fonts.small};
`
const MessageError = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const A = styled.a`
  text-decoration: none;
  font-weight: bold;
`
