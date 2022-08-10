import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CounterApp } from './pages/Counter/CounterApp'
import { Home } from './pages/Layouts/Home'
import { Layout } from './pages/Layouts/Layout'
import { ThemeProvider } from '@mui/material'
import { TodoList } from './pages/TodoList/TodoList'
import { theme } from './helpers/theme'
import { urls } from './helpers/urls'
import React from 'react'
import WebPageApp from './pages/WebPage/WebPageApp'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={urls.home} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={urls.counter} element={<CounterApp />} />
          <Route path={urls.web} element={<WebPageApp />} />
          <Route path={urls.todolist} element={<TodoList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
