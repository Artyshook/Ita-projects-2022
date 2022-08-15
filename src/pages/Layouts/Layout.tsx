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
      <Div_Nav>
        <Li>
          <CgWebsite size='2rem' />
          <Link to={urls.web}>JS Hacks</Link>
        </Li>
        <Li>
          <CgAddR size='2rem' />
          <Link to={urls.counter}>Counter</Link>
        </Li>
        <Li>
          <CgGoogleTasks size='2rem' />
          <Link to={urls.todolist}>TodoList</Link>
        </Li>
        <Li>
          <BiCodeAlt size='2rem' />
          <Link to={urls.hackerTyper}>Hacker Typer</Link>
        </Li>
        <Li>
          <CgSmileMouthOpen size='2.5rem' />
          <Link to={urls.pexeso}>Memory game</Link>
        </Li>
        <Li>
          <BiCalculator size='2.5rem' />
          <Link to={urls.calculator}>Mortgage calculator</Link>
        </Li>
      </Div_Nav>
      <Outlet />
    </>
  )
}

export const Div_Nav = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  justify-content: center;
  padding: 10rem;
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
export const UL_Menu = styled.ul`
  gap: 1.5rem;
  display: flex;
`
