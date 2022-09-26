import { Box } from '@mui/material'
import { H1 } from './home/Home'
import { Link, useLocation } from 'react-router-dom'
import { Toggler } from './home/Toggler'
import { info } from './info'
import { theme } from '../theme'
import styled from 'styled-components'

const links = [
  {
    name: 'Home',
    to: '/',
    active: 'home',
  },
  {
    name: 'About Me',
    to: '/about',
    active: 'about',
  },
  {
    name: info.initials,
    type: 'initials',
    to: '/',
    active: 'home',
  },
  {
    name: 'Portfolio',
    to: '/portfolio',
    active: 'portfolio',
  },
]

type PropsType = {
  darkMode: boolean
  handleClick: () => void
}

type Link = {
  name: string
  to: string
  active: string
  type?: undefined
}

export const Navbar = (props: PropsType) => {
  const location = useLocation()

  return (
    <Container component={'nav'}>
      <BoxWrapper component={'ul'} gap={{ xs: '2rem', md: '8rem' }}>
        {links.map((link, index) => (
          <Box key={index} component={'li'}>
            <Link to={link.to}>
              {!link.type && <p>{link.name}</p>}
              {link.type && <H1>{link.name}</H1>}
            </Link>
          </Box>
        ))}
        <Li>{<Toggler darkMode={props.darkMode} handleClick={props.handleClick} />}</Li>
      </BoxWrapper>
    </Container>
  )
}

const Container = styled(Box)`
  a,
  a:link,
  a:hover,
  a:visited,
  a:active {
    text-decoration: none;
    transform: none;
    transition: none;
  }
  width: 100%;

  nav {
    transition: all 250ms ease;
  }

  .active {
    border-bottom: 5px solid;
    border-image-slice: 1;
  }
`

const Li = styled.li`
  transition: all 250ms ease;
  color: ${theme.colors.dark};
`
const BoxWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: lowercase;
  font-size: 1.5rem;
  list-style-type: none;
`
