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
    <>
      <Link_GoBack to={urls.blog.list}>
        <span> ← </span> <span>Go Back</span>
      </Link_GoBack>
      <Div_Wrapper>
        {blog && (
          <div>
            <Header>
              <H1>{blog.title}</H1>
              <P_Category>{blog.category}</P_Category>
            </Header>
            <Img_Cover src={blog.cover} alt='cover' />
            <P_Post>
              <Markdown>{blog.post}</Markdown>
            </P_Post>
          </div>
        )}
      </Div_Wrapper>
    </>
  )
}

const Div_Wrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  width: 95%;
  padding: 2rem 0;
  gap: 1rem;
  ${theme.breakpoint.phone} {
    width: 90%;
  }
`

const H1 = styled.h1`
  max-width: 700px;
  word-break: break-all;
`
const Header = styled.header`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  max-width: 700px;
  word-break: break-all;
`
const Img_Cover = styled.img`
  width: 100%;
`
export const Link_GoBack = styled(Link)`
  padding: 2rem 4rem;
  text-decoration: none;
  font-size: ${theme.fonts.xs};
  color: ${theme.colors.link};
  font-weight: 500;
  display: block;
`
