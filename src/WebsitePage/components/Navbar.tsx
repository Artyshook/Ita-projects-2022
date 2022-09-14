import { Box } from '@mui/material'
import { H1 } from './home/Home'
import { Link, useLocation } from 'react-router-dom'
import { info } from './info'
import { theme } from '../theme'
import { useState } from 'react'
import Toggler from './home/Toggler'
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

export default function Navbar({ darkMode, handleClick }: PropsType) {
  const location = useLocation()
  const [active, setActive] = useState(
    location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length)
  )

  return (
    <BoxGlobal component={'nav'}>
      <BoxWrapper component={'ul'} gap={{ xs: '2rem', md: '8rem' }}>
        {links.map((link, index) => (
          <Box key={index} component={'li'}>
            <Link to={link.to} onClick={() => setActive(link.active)}>
              {!link.type && <P>{link.name}</P>}
              {link.type && <H1>{link.name}</H1>}
            </Link>
          </Box>
        ))}
        <Li>{<Toggler darkMode={darkMode} handleClick={handleClick} />}</Li>
      </BoxWrapper>
    </BoxGlobal>
  )
}

const BoxGlobal = styled(Box)`
  // li {
  //   transition: all 250ms ease;
  //
  //   &:hover {
  //     transform: translateY(-3px);
  //     transition: all 250ms ease;
  //     color: ${info.baseColor};
  //   }
  // }
  a,
  a:link,
  a:hover,
  a:visited,
  a:active {
    text-decoration: none;
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

  //&:hover {
  //  transform: translateY(-3px);
  //  transition: all 250ms ease;
  //}
`
const BoxWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: lowercase;
  font-size: 1rem;
  list-style-type: none;
`
// const My_Box = styled(Box)<{ link: string; active: string; linkType: string | undefined }>`
//   border-bottom: ${props => (props.link === props.active ? '#5px solid green' : undefined)}
//   border-image-slice: ${props => (props.link === props.active ? '1' : undefined)};
// ;
//
// `

const P = styled.p`
  padding-bottom: 0.5rem;
`
