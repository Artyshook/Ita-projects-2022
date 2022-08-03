import { Link, Outlet } from 'react-router-dom'
import { urls } from '../../helpers/urls'
import React from 'react'
import styled from 'styled-components'

export const Layout = () => {
  return (
    <>
      <Div_Nav>
        <UL_Menu>
          <Li>
            <Link to={urls.home}>Home</Link>
          </Li>
          <Li>
            <Link to={urls.web}>WebPage</Link>
          </Li>
          <Li>
            <Link to={urls.counter}>Counter</Link>
          </Li>
        </UL_Menu>
      </Div_Nav>
      <Outlet />
    </>
  )
}

export const Div_Nav = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`
export const Li = styled.li`
  display: block;
  margin: 0px;
  padding: 0px;
  margin-right: 20px;
`
export const UL_Menu = styled.ul`
  display: flex;
`
