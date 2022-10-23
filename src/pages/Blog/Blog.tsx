import { AddPostCollapse } from './AddPostCollapse'
import { FormControl, InputGroup } from 'react-bootstrap'
import { FormGroup } from 'reactstrap'
import { PostCard } from './PostCard'
import { ToastContainer, toast } from 'react-toastify'
import {
  convertToSlug,
  customStylesSelector,
  letterNumberCheck,
  useLocalStorage,
} from '../../helpers/functions'
import { coverArr, initialBlogData, options, options2 } from '../../helpers/data'
import { genericHookContextBuilder } from '../../helpers/genericHookContextBuilder'
import { theme } from '../../helpers/theme'
import { v1 } from 'uuid'
import React, { useContext, useState } from 'react'
import Select from 'react-select'
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
  const [formData, setFormData] = useLocalStorage('blog', initialBlogData as BlogData[])
  const [title, setTitle] = useState('')
  const [postText, setPostText] = useState('')
  const [category, setCategory] = useState('' as string)
  const [error, setError] = useState(null as string | null)
  const [filterCategory, setFilterCategory] = useState('' as string)
  const [searchInput, setSearchInput] = useState('')
  const [filter, setFilter] = useState({ input: '', category: '' })

  const notification = () => {
    toast('🙌 Upload successfully')
  }

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

  const inputCheck = () => {
    if (!title.trim()) {
      setError('please enter the title')
    } else if (!letterNumberCheck.test(title)) {
      setError('please enter the title in English')
    } else if (formData.find(el => el.url === title.trim())) {
      setError('a similar title already exists, please type another')
    } else if (!category) {
      setError('please select a category')
    } else if (!postText.trim()) {
      setError('the article was not entered ')
    } else {
      notification()
      setData()
      setError(null)
    }
  }

  const filteredList = () => {
    return filter.category === '' && filter.input === ''
      ? formData
      : filter.input === ''
      ? formData.filter(article =>
          filter.category === 'all' ? article : article.category === filter.category
        )
      : formData.filter(article => article.title.toLowerCase().includes(filter.input.toLowerCase()))
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
    setFilterCategory,
    filterCategory,
    filteredList,
    searchInput,
    setSearchInput,
    setFilter,
    filter,
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
      <Container>
        <Header>
          <AddPostCollapse />
          <MyInputGroup>
            <MyFormControl
              placeholder='Search by title'
              aria-label="Recipient's username"
              aria-describedby='basic-addon2'
              onChange={(e: { currentTarget: { value: any } }) => {
                logic.setFilter({ ...logic.filter, input: e.currentTarget.value })
              }}
            />
          </MyInputGroup>
          <MyFormGroup>
            <Select
              styles={customStylesSelector}
              placeholder={'Category'}
              options={options2}
              value={options2.filter(option => option.value === logic.filter.category)}
              onChange={e => {
                if (e === null) return
                logic.setFilter({ input: '', category: e.value })
              }}
            />
          </MyFormGroup>
        </Header>
        <Content>
          <GridContainer>
            {logic.filteredList().map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </GridContainer>
        </Content>
      </Container>
      <MyToastContainer
        position='top-center'
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </Div_Wrapper>
  )
}

const Header = styled.div`
  width: 80%;
  ${theme.breakpoint.phone} {
    grid-template-columns: repeat(1, 1fr);
    width: 90%;
  }
`

const Content = styled.div`
  width: 80%;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 70%;
`
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  ${theme.breakpoint.phone} {
    grid-template-columns: repeat(1, 1fr);
  }
`

const MyToastContainer = styled(ToastContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  ${theme.breakpoint.phone} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`

const MyInputGroup = styled(InputGroup)`
  padding-top: 10px;
  height: 5rem;
  padding-bottom: 5px;
  font-size: ${theme.fonts.xs};
`
const MyFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: row;
  font-size: ${theme.fonts.xs};
`

const MyFormControl = styled(FormControl)`
  font-size: ${theme.fonts.xs};
`
