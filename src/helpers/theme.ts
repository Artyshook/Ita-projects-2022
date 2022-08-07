import { createTheme } from '@mui/material'
import styled from 'styled-components'

export const fonts1 = {
  fontSizeH1: '70px',
  fontSizeH2: '18px',
  fontSizeArticle: '17px',
  fontSizeMenu: '14px',
  fontSizeTitle: '50px',
  fontSizeStandard: '16px',
  fontFamily: "'Open Sans', sans-serif",
}

export const fonts = {
  small: '1.5rem',
  medium: '3rem',
  large: '5rem',
  extraLarge: '7rem',
}

export const background = {
  backgroundColor: '${colors.white}',
}

export const colors = {
  white: '#f5f5f5',
  blue: '#507CFB',
  blue2: '#7A4BDD',
  green: '#00ff7f',
  yellow: '#F3C84B',
  black: '#1c1c1c',
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
})

export const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: 'Open Sans', sans-serif;
  color: ${colors.blue};
  background: ${background.backgroundColor};
`
