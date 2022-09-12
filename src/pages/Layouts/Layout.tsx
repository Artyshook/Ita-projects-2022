import { BiCalculator, BiCodeAlt } from 'react-icons/bi'
import { CgAddR, CgGoogleTasks, CgWebsite } from 'react-icons/cg'
import { CgSmileMouthOpen } from 'react-icons/cg'
import { Link, Outlet } from 'react-router-dom'
import { theme } from '../../helpers/theme'
import { urls } from '../../helpers/urls'
import React from 'react'
import styled from 'styled-components'

export const Layout = () => {
  return (
    <>
      <Div_Global>
        <Div_GridContainer>
          <Div_GridItem>
            <CgWebsite size='2rem' />
            <Link to={urls.web}>JS Hacks</Link>
          </Div_GridItem>
          <Div_GridItem>
            <CgAddR size='2rem' />
            <Link to={urls.counter}>Counter</Link>
          </Div_GridItem>
          <Div_GridItem>
            <CgGoogleTasks size='2rem' />
            <Link to={urls.todolist}>TodoList</Link>
          </Div_GridItem>
          <Div_GridItem>
            <BiCodeAlt size='2rem' />
            <Link to={urls.hackerTyper}>Hacker Typer</Link>
          </Div_GridItem>
          <Div_GridItem>
            <CgSmileMouthOpen size='2.5rem' />
            <Link to={urls.memoryGame}>Memory game</Link>
          </Div_GridItem>
          <Div_GridItem>
            <BiCalculator size='2.5rem' />
            <Link to={urls.calculator}>Mortgage calculator</Link>
          </Div_GridItem>
          <Div_GridItem>
            <BiCalculator size='2.5rem' />
            <Link to={urls.blogWithServer.list}>Blog</Link>
          </Div_GridItem>
          <Div_GridItem>
            <BiCalculator size='2.5rem' />
            <Link to={urls.httpFilter}>Http request</Link>
          </Div_GridItem>
        </Div_GridContainer>
      </Div_Global>
      <Outlet />
    </>
  )
}

const Div_Global = styled.div`
  margin: 0;
  width: 100vw;
  height: 100vh;
  text-align: center;
  overflow: scroll;
`
const Div_GridContainer = styled.div`
  padding-top: 20rem;
  display: grid;
  grid-template-columns: 20% 20%;
  padding-bottom: 2rem;
  justify-content: center;
`

const Div_GridItem = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-decoration: none;
  align-items: center;
  text-align: center;
  border: 1px solid ${theme.colors.whiteGrey};
  margin: 5px;
  font-size: ${theme.fonts.small};
  border-radius: 10px;
  &:hover {
    background-color: ${theme.colors.lightBlue};
    box-shadow: 0 10px gainsboro;
    transition: box-shadow 0.3s;
  }
`

export const Div_Nav = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  justify-content: center;
  background: ${theme.background.backgroungColorHome};
  color: white;
`
export const Li = styled.li`
  font-size: ${theme.fonts.small};
  color: ${theme.colors.blue};
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 10px;
  a {
    color: blue;
    font-size: ${theme.fonts.medium};
    text-decoration: none;
    &:hover {
      color: ${theme.colors.green};

    }
`
