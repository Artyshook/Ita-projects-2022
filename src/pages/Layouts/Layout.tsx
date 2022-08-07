import { CgAddR, CgWebsite } from 'react-icons/cg'
import { Link, Outlet } from 'react-router-dom'
import { colors, fonts } from '../../helpers/theme'
import { urls } from '../../helpers/urls'
import React from 'react'
import styled from 'styled-components'

export const Layout = () => {
  return (
    <>
      <Div_Nav>
        <Li>
          <CgWebsite size='4rem' />
          <Link to={urls.web}>JS Hacks</Link>
        </Li>
        <Li>
          <CgAddR size='4rem' />
          <Link to={urls.counter}>Counter</Link>
        </Li>
      </Div_Nav>
      <Outlet />
    </>
  )
}

export const Div_Nav = styled.div`
  display: flex;
  gap: 10rem;
  justify-content: center;
  align-items: center;
  padding: 7rem;
  background-color: white;
  color: white;
`
export const Li = styled.li`
  font-size: ${fonts.small};
  color: ${colors.blue};
  display: flex;
  margin: 0;
  padding: 0;
  a {
    color: blue;
    font-size: ${fonts.medium};
    text-decoration: none;
    &:hover {
      color: ${colors.green};

    }
`
export const UL_Menu = styled.ul`
  gap: 1.5rem;
  display: flex;
`
