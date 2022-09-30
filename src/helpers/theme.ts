import { createTheme } from '@mui/material'
import styled from 'styled-components'

export const device = {
  phone: 650,
  tablet: 900,
  notebook: 1600,
  desktop: 1900,
} as const

export const theme = {
  fonts: {
    xxs: '0.7rem',
    xs: '1.3rem',
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
    lightBlue: '#d8edff',
    green: '#00ff7f',
    yellow: '#F3C84B',
    black: '#1c1c1c',
    superBlack: '#212121',
    dark: '#383838',
    grey: '#dcdcdc',
    lily: 'rgb(237, 236, 248)',
    darkGrey: '#818589',
    link: '#a9a9a9',
    whiteGrey: 'gainsboro',
    boxShadow: '6px 4px 8px 0px rgba(34, 60, 80, 0.2)',
    boxShadow2: `6px 4px 15px 3px rgba(33, 60, 70, 0.2)`,
    boxShadow3: '6px 4px 15px 3px rgba(33, 60, 70, 0.2)',
    textShadow: '1px 2px 5px rgba(255, 85, 105, 0.3), 3px -1px 5px rgba(80, 220, 251, 0.08)',
  },
  background: {
    backgroundColor: '#fffff',
    backgroungColorHome:
      'linear-gradient(34deg, rgba(255,255,255,1) 25%, rgba(186,203,254,1) 93%, rgba(161,184,253,1) 100%, rgba(104,209,209,1) 100%);',
    lightBlue: '#0080ff',
    tagBackground: 'linear-gradient(to right, #6190e8, #a7bfe8)',
    taskBackground: '#f4f4f4',
    backgroundImage:
      'linear-gradient(90deg, rgba(224, 195, 252, 0.7) 0%, rgba(142, 197, 252, 0.7) 100%)',
    filterButtonBackground: 'linear-gradient(to right, #f5f0ff, #ebf8ff)',
    filterButtonBackgroundDark:
      'linear-gradient(34deg, rgba(37,59,86,0.20258525773590685) 10%, rgba(50,56,122,1) 100%)',
  },

  breakpoint: {
    phone: `@media (max-width: ${device.phone}px)`,
    tablet: `@media (max-width: ${device.tablet}px)`,
    notebook: `@media (max-width: ${device.notebook}px)`,
    desktop: `@media (max-width: ${device.desktop}px)`,
  },
} as const
