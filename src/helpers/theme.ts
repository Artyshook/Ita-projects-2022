import { createTheme } from '@mui/material'
import styled from 'styled-components'

export const fonts = {
  fontSizeH1: '70px',
  fontSizeH2: '18px',
  fontSizeArticle: '17px',
  fontSizeMenu: '14px',
  fontSizeTitle: '50px',
  fontSizeStandard: '16px',
  fontColor: '#ffffff',
  fontFamily: "'Open Sans', sans-serif",
}

export const background = {
  backgroundColor: '#36454f',
  backgroundSize: '1000px',
}

export const colors = {
  borderColor: '#fff',
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
  font-size: ${fonts.fontSizeStandard};
  color: ${fonts.fontColor};
  background: ${background.backgroundColor};
  height: ${background.backgroundSize};
`
