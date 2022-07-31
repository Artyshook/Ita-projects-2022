import './App.css'
import { BrowserRouter, HashRouter, Link, Route, Routes } from 'react-router-dom'
import { CounterApp } from './tasks/Counter/CounterApp'
import { Layout } from './Layouts/Layout'
import React from 'react'
import WebPageApp from './tasks/WebPage/WebPageApp'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='web' element={<WebPageApp />} />
          <Route path='counter' element={<CounterApp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
