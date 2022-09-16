import { Box } from '@mui/material'
import React from 'react'

type PropsTyp = {
  darkMode: boolean
  handleClick: () => void
}

export const Toggler = (props: PropsTyp) => {
  return (
    <Box
      fontSize={'1.5rem'}
      sx={{
        cursor: 'pointer',
      }}
    >
      {props.darkMode ? (
        <span onClick={props.handleClick} aria-label='Full Moon' role='img'>
          🌜
        </span>
      ) : (
        <span onClick={props.handleClick} aria-label='New Moon' role='img'>
          🌞
        </span>
      )}
    </Box>
  )
}
