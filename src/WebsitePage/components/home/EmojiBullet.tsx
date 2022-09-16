import { Box } from '@mui/material'
import React from 'react'

type PropsType = {
  emoji: string
  text: string
}
export const EmojiBullet = (props: PropsType) => {
  return (
    <Box component={'li'} fontSize={'1.3rem'} lineHeight={1.5} style={{ cursor: 'default' }}>
      <Box
        component={'span'}
        aria-label='cheese'
        role='img'
        mr={{ xs: '0.5rem', md: '1rem' }}
        fontSize={'1.5rem'}
      >
        {props.emoji}
      </Box>{' '}
      {props.text}
    </Box>
  )
}
