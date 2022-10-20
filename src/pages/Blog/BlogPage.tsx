import { BlogData } from './Blog'
import { Link } from 'react-router-dom'
import { theme } from '../../helpers/theme'
import { urls } from '../../helpers/urls'
import { useLocalStorage } from '../../helpers/functions'
import { useParams } from 'react-router'
import Markdown from 'markdown-to-jsx'
import React from 'react'
import styled from 'styled-components'

export const BlogPage = () => {
  const params = useParams()
  const [blogData, setBlogData] = useLocalStorage('blog', [] as BlogData[])

  const blog = blogData?.find(post => post.url === params.blogSlug)

  return (
    <Div_Wrapper>
      {blog && (
        <Content>
          <Header>
            <H1>{blog.title}</H1>
            <P_Category>{blog.category}</P_Category>
          </Header>
          <Body>
            <Img_Cover src={blog.cover} alt='cover' />
            <P_Post>
              <Markdown>{blog.post}</Markdown>
            </P_Post>
          </Body>
        </Content>
      )}
    </Div_Wrapper>
  )
}

const Content = styled.div`
  margin: 0;
  padding: 10px;
`
const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Div_Wrapper = styled.div`
  max-width: 1000px;
  background-color: white;
  box-shadow: rgb(102 102 102 / 5%) 0px 60px 30px;
  border-radius: 20px;
  margin: 0 auto;
  width: 90%;
  padding: 1rem 0;
  gap: 1rem;
  ${theme.breakpoint.phone} {
    width: 90%;
  }
`

const H1 = styled.h1`
  max-width: 700px;
  word-break: break-all;
  text-align: start;
  color: black;
`
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 1rem;
  padding-left: 10%;
`

const P_Category = styled.p`
  font-size: 0.7rem;
  background: ${theme.background.tagBackground};
  color: #fff;
  padding: 0.5rem 0.7rem;
  border-radius: 5px;
  width: fit-content;
  text-transform: capitalize;
  align-items: start;
  justify-content: start;
`
const P_Post = styled.div`
  padding: 1rem;
  margin-top: 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: ${theme.fonts.small};
  max-width: 800px;
  word-break: break-all;
`
const Img_Cover = styled.img`
  width: 80%;
`
export const Link_GoBack = styled(Link)`
  padding: 2rem 4rem;
  text-decoration: none;
  font-size: ${theme.fonts.xs};
  color: ${theme.colors.link};
  font-weight: 500;
  display: block;
`
