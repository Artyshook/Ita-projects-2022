import { BlogData } from './Blog'
import { Link } from 'react-router-dom'
import { avatar } from '../../helpers/data'
import { theme } from '../../helpers/theme'
import { urls } from '../../helpers/urls'
import Markdown from 'markdown-to-jsx'
import React from 'react'
import styled from 'styled-components'

type PropsType = {
  post: BlogData
}

export const PostCard = (props: PropsType) => {
  return (
    <Div_Container>
      <Wrapper>
        <Link_Link to={urls.blog.getBlogSlug(props.post.url)}>
          <Img_Cover src={props.post.cover} alt='cover' />
          <PostInfo>
            <P_Category>{props.post.category}</P_Category>
            <Title>{props.post.title.charAt(0).toUpperCase() + props.post.title.slice(1)}</Title>
            <P_Post>
              <Markdown>{props.post.post}</Markdown>
            </P_Post>
          </PostInfo>
        </Link_Link>
      </Wrapper>
    </Div_Container>
  )
}
const P_Category = styled.p`
  font-size: ${theme.fonts.xs};
  background: ${theme.background.tagBackground};
  color: ${theme.colors.white};
  padding: 0.5rem 0.7rem;
  border-radius: 5px;
  width: fit-content;
  text-transform: capitalize;
  align-items: start;
  justify-content: start;
`
const Wrapper = styled.div`
  background-color: ${theme.colors.superWhite};
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  :hover {
    transition: transform 200ms ease-out, box-shadow 300ms ease-out;
    transform: translate(0px, -4px);
    box-shadow: ${theme.colors.boxShadow5};

`
const Div_Container = styled.div`
  display: flex;
  flex-direction: column;
`
const PostInfo = styled.div`
  margin: 0;
  padding: 30px;
`
const Img_Cover = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  margin-bottom: 0.5rem;
`
const Title = styled.h3`
  color: ${theme.colors.black};
  margin: 0.5rem 0 1rem 0;
  flex: 1;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
`

const P_Post = styled.p`
  padding: 5px;
  text-overflow: ellipsis;
  position: relative;
  max-height: 100px;
  max-width: 300px;
  overflow: hidden;
  line-height: 24px;
  box-sizing: border-box;
  cursor: pointer;
  color: ${theme.colors.darkGrey};
  font-size: ${theme.fonts.xs};
`
const Link_Link = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: ${theme.fonts.xs};
`
