import { DetailPostContext } from './PostDetailContext'
import { Link } from 'react-router-dom'
import { theme } from '../../../helpers/theme'
import { urls } from '../../../helpers/urls'
import Markdown from 'markdown-to-jsx'
import React, { useContext } from 'react'
import styled from 'styled-components'

export const DetailPost = () => {
  const logic = useContext(DetailPostContext)

  return (
    <>
      <Link_GoBack to={urls.blogWithServer.blogList}>
        <span> ← </span> <span>Go Back</span>
      </Link_GoBack>
      <Div_Wrapper>
        <div>
          <Header>
            <H1>{logic.data.title || ''}</H1>
            <P_Category>{logic.data.category || ''}</P_Category>
          </Header>
          <Img_Cover src={logic.data.cover || ''} alt='cover' />
          <P_Post>
            <Markdown>{logic.data.post || ''}</Markdown>
          </P_Post>
        </div>
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
