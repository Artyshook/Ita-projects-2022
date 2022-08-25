import { CounterApp } from './pages/Counter/CounterApp'
import { FilterByName } from './pages/Filter/FilterByName'
import { HackerTyper } from './pages/HackerType/HackerTyper'
import { Layout } from './pages/Layouts/Layout'
import { MemoryGame } from './pages/MemoryGame/MemoryGame'
import { MortgageCalculator } from './pages/MortgageCalculator/MortgageCalculator'
import { NewTodoList } from './pages/TodoList/TodoList'
import { Route, Routes } from 'react-router-dom'
import { SimpleHttpRequest } from './pages/SimpleHttpRequest'
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
        <Route path={urls.todolist} element={<NewTodoList />} />
        <Route path={urls.hackerTyper} element={<HackerTyper />} />
        <Route path={urls.memoryGame} element={<MemoryGame />} />
        <Route path={urls.calculator} element={<MortgageCalculator />} />
        <Route path={urls.filter} element={<FilterByName />} />
        <Route path={urls.httpFilter} element={<SimpleHttpRequest />} />
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
    font-size: 70%;
  }
`
