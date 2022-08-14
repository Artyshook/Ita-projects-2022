import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Calculator } from './pages/Mortgage calculator/Mortgage calculator'
import { CounterApp } from './pages/Counter/CounterApp'
import { HackerTyper } from './pages/HackerType/HackerTyper'
import { Layout } from './pages/Layouts/Layout'
import { Pexeso } from './pages/Pexeso/Pexeso'
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
        <Route path={urls.pexeso} element={<Pexeso />} />
        <Route path={urls.calculator} element={<Calculator />} />
      </Routes>
      <GlobalStyle />
    </div>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    background-color: ${theme.background.backgroundColor};
    font-family: 'Open Sans', sans-serif;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  body::-webkit-scrollbar {
    display: none;
  }
  html {
    font-size: 65%;
  }
`
