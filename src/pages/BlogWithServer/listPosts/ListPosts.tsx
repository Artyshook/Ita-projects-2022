import { AddPostForm } from '../../Blog/AddPostForm'
import { Link_GoBack } from '../../Blog/BlogPage'
import { ListPostContext } from './ListPostsContext'
import { PostCard } from './PostCard'
import { theme } from '../../../helpers/theme'
import { urls } from '../../../helpers/urls'
import React, { useContext } from 'react'
import styled from 'styled-components'

export const ListPosts = () => {
  const logic = useContext(ListPostContext)

  return (
    <>
      <Link_GoBack to={urls.home}>
        <span> ← </span> <span>Go Back</span>
      </Link_GoBack>
      <Div_Wrapper>
        {/*<H1>All Articles</H1>*/}
        {/*<p>an amazing place to make yourself productive and have fun with daily updates.</p>*/}
        {/*<Button_MyButton onClick={() => setFormShown(true)}>*/}
        {/*  <CgAddR size='2rem' />*/}
        {/*  <div>Add your post</div>*/}
        {/*</Button_MyButton>*/}
        {/*<AddPostForm />*/}
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
