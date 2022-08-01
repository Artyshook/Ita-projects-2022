import { Global, Li, Menu, Nav } from './Styles.styled'
import { Link, Outlet } from 'react-router-dom'
import React from 'react'

export const Layout = () => {
  return (
    <>
      <Nav>
        <Menu>
          <Li>
            <Link to='/'>Home</Link>
          </Li>
          <Li>
            <Link to='/web'>WebPage</Link>
          </Li>
          <Li>
            <Link to='/counter'>Counter</Link>
          </Li>
        </Menu>
      </Nav>
      <Outlet />
    </>
  )
}
