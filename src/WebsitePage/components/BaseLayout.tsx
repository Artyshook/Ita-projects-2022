import { About } from './about/About'
import { AnimatePresence } from 'framer-motion'
import { BlogPage } from '../../pages/Blog/BlogPage'
import { BlogUseContext } from '../../pages/BlogWithServer/addPost/PostContext'
import { BlogUseContext1 } from '../../pages/Blog/Blog'
import { Box, Grid } from '@mui/material'
import { DetailPostUseContext } from '../../pages/BlogWithServer/postDatail/PostDetailContext'
import { HackerTyper } from '../../pages/HackerType/HackerTyper'
import { Home } from './home/Home'
import { MemoryGame } from '../../pages/MemoryGame/MemoryGame'
import { MortgageCalculator } from '../../pages/MortgageCalculator/MortgageCalculator'
import { Navbar } from './Navbar'
import { Portfolio } from './portfolio/Portfolio'
import { Route, Routes, useLocation } from 'react-router-dom'
import { TodoList } from '../../pages/TodoListRedux/TodoList'
import { theme } from '../theme'
import { urls } from '../../helpers/urls'
import React, { useState } from 'react'
import styled from 'styled-components'

export type DarkModeProps = {
  darkMode: boolean
}

export const BaseLayout = () => {
  const [darkMode, setDarkMode] = useState(false)
  const location = useLocation()

  return (
    <Container darkMode={darkMode}>
      <Grid
        container
        display={'flex'}
        flexDirection={'column'}
        minHeight={'100vh'}
        justifyContent={'space-between'}
      >
        <Grid item>
          {<Navbar darkMode={darkMode} handleClick={() => setDarkMode(!darkMode)} />}
        </Grid>
        <Grid item flexGrow={1}>
          <AnimatePresence mode='wait'>
            <Routes key={location.pathname} location={location}>
              <Route path={urls.home} element={<Home />} />
              <Route path={urls.about} element={<About />} />
              <Route path={urls.portfolio}>
                <Route index element={<Portfolio />} />
                <Route path={urls.todolist} element={<TodoList />} />
                <Route path={urls.memoryGame} element={<MemoryGame />} />
                <Route
                  path={urls.calculator}
                  element={<MortgageCalculator darkMode={darkMode} />}
                />
                <Route path={urls.hackerTyper} element={<HackerTyper />} />
              </Route>
              <Route path={urls.blog.list} element={<BlogUseContext1 />} />
              <Route path={urls.blog.page} element={<BlogPage />} />
              <Route path={urls.blogWithServer.list} element={<BlogUseContext />} />
              <Route path={urls.blogWithServer.page} element={<DetailPostUseContext />} />
            </Routes>
          </AnimatePresence>
        </Grid>
        <Grid item>
          <Box
            component={'footer'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            py={'1.5rem'}
            sx={{ opacity: 0.7 }}
            width={'100%'}
          >
            <p>&hearts; Artem Saibel &copy; 2022</p>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

const Container = styled(Box)<{ darkMode: boolean }>`
  background-color: ${props => (props.darkMode ? theme.colors.dark : theme.colors.white)};
  color: ${({ darkMode }) => (!darkMode ? theme.colors.dark : theme.colors.white)};
  transition: all 400ms;
  i,
  a {
    color: ${props => (props.darkMode ? theme.colors.white : theme.colors.dark)};
    transition: color 400ms;
  }
  a:visited {
    color: ${props => (props.darkMode ? theme.colors.white : theme.colors.dark)};
  }
  ul {
    list-style-type: none;
  }

  li {
    &:hover {
      //transform: translateY(2px) scale(1.2);
      //transition: all 300ms ease;
      //transform: scale(1.2)
    }
  }
`
