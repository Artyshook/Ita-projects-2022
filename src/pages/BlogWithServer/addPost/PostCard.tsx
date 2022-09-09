import { BlogData } from './PostContext'
import { Link } from 'react-router-dom'
import { avatar } from '../../../helpers/data'
import { theme } from '../../../helpers/theme'
import { urls } from '../../../helpers/urls'
import Markdown from 'markdown-to-jsx'
import React from 'react'
import styled from 'styled-components'

type PropsType = {
  post: BlogData
  deleteBySlug: (id: string) => void
}

export const PostCard2 = (props: PropsType) => {
  return (
    <Div_Container>
      <Img_Cover src={props.post.cover} alt='cover' />
      <H3>{props.post.title}</H3>
      <P_Post>
        <Markdown>{props.post.post}</Markdown>
        <Button_Delete onClick={() => props.deleteBySlug(props.post.slug)}>X</Button_Delete>
      </P_Post>
      <Footer>
        <Div_Author>
          <Img_AuthorImg src={avatar} alt='avatar' />
        </Div_Author>
        <Link_Link to={urls.blogWithServer.getBlogSlug(props.post.slug)}>Discover ➝</Link_Link>
      </Footer>
    </Div_Container>
  )
}

const Div_Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Footer = styled.footer`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  justify-content: space-between;
`
const Img_Cover = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 0.5rem;
`
const H3 = styled.h3`
  margin: 0.5rem 0 1rem 0;
  flex: 1;
  max-width: 100px;
  overflow: hidden;
`

const P_Post = styled.p`
  :before {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  max-height: 50px;
  max-width: 300px;
  overflow: hidden;
  padding-right: 0.6rem;
  color: ${theme.colors.darkGrey};
  font-size: ${theme.fonts.xs};
`
const Div_Author = styled.div`
  display: flex;
  align-items: center;
`
const Img_AuthorImg = styled.img`
  max-height: 35px;
  max-width: 35px;
  border-radius: 40px;
`

const Link_Link = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: ${theme.fonts.xs};
`
const Button_Delete = styled.button`
  font-size: ${theme.fonts.xxs};
  background: ${theme.background.tagBackground};
  border: none;
  color: ${theme.colors.white};
  padding: 0.5rem 0.7rem;
  border-radius: 5px;
  width: fit-content;
  text-transform: capitalize;
  align-items: start;
  justify-content: start;
`
