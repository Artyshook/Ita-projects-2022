import { Box } from '@mui/material'
import React from 'react'

type PropsTyp = {
  darkMode: boolean
  handleClick: () => void
}

export default function Toggler({ darkMode, handleClick }: PropsTyp) {
  return (
    <Box
      fontSize={'1.5rem'}
      sx={{
        cursor: 'pointer',
      }}
    >
      {darkMode ? (
        <span onClick={handleClick} aria-label='Full Moon' role='img'>
          🌜
        </span>
      ) : (
        <span onClick={handleClick} aria-label='New Moon' role='img'>
          🌞
        </span>
      )}
    </Box>
  )
}
