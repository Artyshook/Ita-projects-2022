import { createTheme } from '@mui/material'
import styled from 'styled-components'

export const theme = {
  fonts: {
    small: '1.5rem',
    sMedium: '2.5rem',
    medium: '3rem',
    large: '5rem',
    extraLarge: '7rem',
  },
  spacing: {
    small: '1.5rem',
    medium: '3rem',
    large: '5rem',
    xl: '7rem',
    xxl: '15rem',
  },
  colors: {
    white: '#f5f5f5',
    blue: '#507CFB',
    blue2: '#7A4BDD',
    green: '#00ff7f',
    yellow: '#F3C84B',
    black: '#1c1c1c',
    grey: '#dcdcdc',
    darkGrey: '#818589',
    boxShadow: '6px 4px 8px 0px rgba(34, 60, 80, 0.2)',
    boxShadow2: `6px 4px 15px 3px rgba(33, 60, 70, 0.2)`,
  },
  background: {
    backgroundColor: '#fffff',
    backgroungColorHome:
      'linear-gradient(34deg, rgba(255,255,255,1) 25%, rgba(186,203,254,1) 93%, rgba(161,184,253,1) 100%, rgba(104,209,209,1) 100%);',
  },
  mediaMaxSizes: {
    mobile: '480px',
    tablet: '1024px',
    desktop: '1280px',
    desktopBig: '1600px',
  },
} as const
