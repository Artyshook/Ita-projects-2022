import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CounterApp } from './pages/Counter/CounterApp'
import { Home } from './pages/Layouts/Home'
import { Layout } from './pages/Layouts/Layout'
import { urls } from './helpers/urls'
import React from 'react'
import WebPageApp from './pages/WebPage/WebPageApp'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={urls.homeUrl} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={urls.counterAppUrl} element={<CounterApp />} />
          <Route path={urls.webUrl} element={<WebPageApp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
