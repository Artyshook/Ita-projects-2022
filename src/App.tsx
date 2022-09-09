import { BlogUseContext } from './pages/BlogWithServer/addPost/PostContext'
import { CounterApp } from './pages/Counter/CounterApp'
import { DetailPostUseContext } from './pages/BlogWithServer/postDatail/PostDetailContext'
import { HackerTyper } from './pages/HackerType/HackerTyper'
import { Layout } from './pages/Layouts/Layout'
import { MemoryGame } from './pages/MemoryGame/MemoryGame'
import { MortgageCalculator } from './pages/MortgageCalculator/MortgageCalculator'
import { Route, Routes } from 'react-router-dom'
import { TodoList } from './pages/TodoList/TodoList'
import { createGlobalStyle } from 'styled-components'
import { theme } from './helpers/theme'
import { urls } from './helpers/urls'
import React from 'react'
import WebPageApp from './pages/WebPage/WebPageApp'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path={urls.home} element={<Layout />} />
        <Route path={urls.counter} element={<CounterApp />} />
        <Route path={urls.web} element={<WebPageApp />} />
        <Route path={urls.todolist} element={<TodoList />} />
        <Route path={urls.hackerTyper} element={<HackerTyper />} />
        <Route path={urls.memoryGame} element={<MemoryGame />} />
        <Route path={urls.calculator} element={<MortgageCalculator />} />
        <Route path={urls.blogWithServer.blogList} element={<BlogUseContext />} />
        <Route path={urls.blogWithServer.blogPage} element={<DetailPostUseContext />} />
      </Routes>
      <GlobalStyle />
    </div>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
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
