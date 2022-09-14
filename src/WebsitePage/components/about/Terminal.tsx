import { Box } from '@mui/material'
import { theme } from '../../theme'
import React from 'react'
import Style from './Terminal.module.scss'
import classNames from 'classnames'
import styled from 'styled-components'

const iconClass = 'fa fa-circle'

function Terminal(PropsType: { text: any }) {
  const { text } = PropsType

  return (
    <Box_Wrapper component={'section'} width={{ xs: '80%', md: '50%' }} mb={'4rem'}>
      <Box
        sx={{ backgroundColor: '#8c8c8c' }}
        p={'0.5rem'}
        borderRadius={'0.5rem 0.5rem 0 0'}
        fontSize={'1rem'}
      >
        <I className={classNames(iconClass, 'red')} />
        <I className={classNames(iconClass, 'yellow')} />
        <I className={classNames(iconClass, 'green')} />
      </Box>
      <Box
        py={{ xs: '1rem', md: '2rem' }}
        px={{ xs: '2rem', md: '3rem' }}
        borderRadius={'0 0 0.5rem 0.5rem'}
        sx={{ backgroundColor: '#27242f' }}
        fontSize={'1.5rem'}
        fontFamily={'Courier New, Courier, monospace'}
      >
        {text}
      </Box>
    </Box_Wrapper>
  )
}

export default Terminal

const Box_Wrapper = styled(Box)`
  p,
  li {
    margin: 1rem 0;
    color: ${theme.colors.white};
  }
  a,
  a:visited {
    animation: changeColors 3s infinite;
    font-weight: bold;
  }
  @keyframes changeColors {
    0% {
      color: #00a47f;
    }
    33.3% {
      color: #1d91e3;
    }
    66.6% {
      color: #d419fe;
    }
    100% {
      color: #00a47f;
    }
  }

  box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.4);
  border-radius: 0.5rem;
`
const I = styled.i`
  padding-left: 0.5rem;

  &.red {
    color: ${theme.colors.red};
  }

  &.yellow {
    color: ${theme.colors.yellow};
  }

  &.green {
    color: ${theme.colors.green};
  }
`
