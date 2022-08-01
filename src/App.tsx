import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CounterApp } from './tasks/Counter/CounterApp'
import { Home } from './Layouts/Home'
import { Layout } from './Layouts/Layout'
import React from 'react'
import WebPageApp from './tasks/WebPage/WebPageApp'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='counter' element={<CounterApp />} />
          <Route path='web' element={<WebPageApp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
