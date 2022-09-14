import { Box, Grid } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { TodoList } from '../../pages/TodoList/TodoList'
import { theme } from '../theme'
import { urls } from '../../helpers/urls'
import { useState } from 'react'
import About from './about/About'
import Home from './home/Home'
import Navbar from './Navbar'
import Style from './BaseLayout.module.scss'
import styled from 'styled-components'

export default function BaseLayout() {
  let [darkMode, setDarkMode] = useState(false)

  function handleClick() {
    setDarkMode(!darkMode)
  }

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
            <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/about'} element={<About />}>
                {/*<Route path={'/todo'} element={<TodoList />} />*/}
              </Route>
              {/*  /!*<Route exact path={'/portfolio'} element={<Portfolio />} />*!/*/}
            </Routes>
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
              {/*<p>&copy; 2022</p>*/}
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
    

`
