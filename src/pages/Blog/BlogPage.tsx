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
      <Container>
        {blog && (
          <Content>
            <Header>
              <H1>{blog.title}</H1>
              <P_Category>{blog.category}</P_Category>
            </Header>
            <Body>
              <Img_Cover src={blog.cover} alt='cover' />
              <Div_Post>
                <Markdown>{blog.post}</Markdown>
              </Div_Post>
            </Body>
          </Content>
        )}
      </Container>
    </Div_Wrapper>
  )
}

const Content = styled.div`
  margin: 0;
  padding: 10px;
  width: 80%;
  ${theme.breakpoint.phone} {
    width: 90%;
  }
`
const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Div_Wrapper = styled.div`
  max-width: 1000px;
  background-color: ${theme.colors.superWhite};
  box-shadow: ${theme.colors.boxShadow4}
  border-radius: 20px;
  margin: 0 auto;
  width: 90%;
  padding: 2rem 0;
  gap: 1rem;
  ${theme.breakpoint.phone} {
    width: 90%;
  }
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const H1 = styled.h1`
  max-width: 700px;
  word-break: break-all;
  text-align: start;
  color: ${theme.colors.black};
`
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 1rem;
`

const P_Category = styled.p`
  font-size: ${theme.fonts.xs};
  background: ${theme.background.tagBackground};
  color: ${theme.colors.white};
  padding: 0.5rem 0.7rem;
  border-radius: 5px;
  width: fit-content;
  text-transform: capitalize;
  text-align: left;
`
const Div_Post = styled.div`
  text-align: left;
  margin-top: 1.5rem;
  font-size: ${theme.fonts.small};
  word-break: break-all;
  color: ${theme.colors.black};
`
const Img_Cover = styled.img`
  width: 100%;
`
