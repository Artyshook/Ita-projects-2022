import { BlogUseContext } from './pages/BlogWithServer/addPost/PostContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CounterApp } from './pages/Counter/CounterApp'
import { DetailPostUseContext } from './pages/BlogWithServer/postDatail/PostDetailContext'
import { HackerTyper } from './pages/HackerType/HackerTyper'
import { Layout } from './pages/Layouts/Layout'
import { MemoryGame } from './pages/MemoryGame/MemoryGame'
import { MortgageCalculator } from './pages/MortgageCalculator/MortgageCalculator'
import { TodoList } from './pages/TodoList/TodoList'
import { createGlobalStyle } from 'styled-components'
import { theme } from './helpers/theme'
import { urls } from './helpers/urls'
import BaseLayout from './WebsitePage/components/BaseLayout'
import React from 'react'
import WebPageApp from './pages/WebPage/WebPageApp'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
      {/*  <Routes>*/}
      {/*  <Route path={urls.home} element={<BaseLayout />}></Route>*/}
      {/*  /!*<Route path={urls.counter} element={<CounterApp />} />*!/*/}
      {/*  /!*<Route path={urls.web} element={<WebPageApp />} />*!/*/}
      {/*  /!*<Route path={urls.todolist} element={<TodoList />} />*!/*/}
      {/*  /!*<Route path={urls.hackerTyper} element={<HackerTyper />} />*!/*/}
      {/*  /!*<Route path={urls.memoryGame} element={<MemoryGame />} />*!/*/}
      {/*  /!*<Route path={urls.calculator} element={<MortgageCalculator />} />*!/*/}
      {/*  <Route path={urls.blogWithServer.list} element={<BlogUseContext />} />*/}
      {/*  <Route path={urls.blogWithServer.page} element={<DetailPostUseContext />} />*/}
      {/*</Routes>*/}
      <GlobalStyle />
    </div>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 1.5vh;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: ${theme.background.backgroundColor};
    font-family: 'Montserrat', sans-serif;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  body::-webkit-scrollbar {
    display: none;
  }
  html {
    font-size: 70%;
  }
`
