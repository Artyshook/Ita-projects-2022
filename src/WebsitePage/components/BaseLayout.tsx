import { About } from './about/About'
import { AnimatePresence } from 'framer-motion'
import { BlogPage } from '../../pages/Blog/BlogPage'
import { BlogUseContext } from '../../pages/BlogWithServer/addPost/PostContext'
import { BlogUseContext1 } from '../../pages/Blog/Blog'
import { Box, Grid } from '@mui/material'
import { CounterApp } from '../../pages/Counter/CounterApp'
import { DetailPostUseContext } from '../../pages/BlogWithServer/postDatail/PostDetailContext'
import { HackerTyper } from '../../pages/HackerType/HackerTyper'
import { Home } from './home/Home'
import { MemoryGame } from '../../pages/MemoryGame/MemoryGame'
import { MortgageCalculator } from '../../pages/MortgageCalculator/MortgageCalculator'
import { Portfolio } from './portfolio/Portfolio'
import { Route, Routes, useLocation } from 'react-router-dom'
import { TodoList } from '../../pages/TodoList/TodoList'
import Navbar from './Navbar'
import React, { useState } from 'react'
import styled from 'styled-components'

export default function BaseLayout() {
  let [darkMode, setDarkMode] = useState(false)

  function handleClick() {
    setDarkMode(!darkMode)
  }
  const location = useLocation()

  return (
    <div id={'bla'}>
      <GlobalBox darkMode={darkMode}>
        <Grid
          container
          display={'flex'}
          flexDirection={'column'}
          minHeight={'100vh'}
          justifyContent={'space-between'}
        >
          <Grid item>{<Navbar darkMode={darkMode} handleClick={handleClick} />}</Grid>
          <Grid item flexGrow={1}>
            <AnimatePresence mode='wait'>
              <Routes key={location.pathname} location={location}>
                <Route path={'/'} element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='portfolio'>
                  <Route index element={<Portfolio />} />
                  <Route path='todolist' element={<TodoList />} />
                  <Route path='memory-game' element={<MemoryGame />} />
                  <Route path='calculator' element={<MortgageCalculator />} />
                  <Route path='counter' element={<CounterApp />} />
                  <Route path='hacker-typer' element={<HackerTyper />} />
                </Route>
                <Route path='blog' element={<BlogUseContext1 />} />
                <Route path='blog/:blogSlug' element={<BlogPage />} />
                <Route path='blog-server' element={<BlogUseContext />} />
                <Route path='blog-server/:blogSlug' element={<DetailPostUseContext />} />
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
      </GlobalBox>
    </div>
  )
}

const GlobalBox = styled(Box)<{ darkMode: boolean }>`
  background-color: ${props => (props.darkMode ? '#1f1f1f' : '#f8f8f8')};
  color: ${({ darkMode }) => (!darkMode ? '#1f1f1f' : '#f8f8f8')};
  transition: all 400ms;
  i,
  a {
    color: ${props => (props.darkMode ? '#f8f8f8' : '#1f1f1f')};
    transition: color 400ms;
  }
  a:visited {
    color: ${props => (props.darkMode ? '#f8f8f8' : '#1f1f1f')};
  }
  ul {
    list-style-type: none;
  }

  li {
    &:hover {
      transform: translateY(-3px);
      transition: all 250ms ease;
    }
  }
`
