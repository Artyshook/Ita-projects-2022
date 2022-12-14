import { BaseLayout } from './WebsitePage/components/BaseLayout'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { theme } from './helpers/theme'
import React from 'react'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
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
