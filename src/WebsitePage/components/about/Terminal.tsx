import { Box } from '@mui/material'
import { theme } from '../../theme'
import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

const iconClass = 'fa fa-circle'

export const Terminal = (props: { text: any }) => {
  return (
    <Box_Wrapper component={'section'} width={{ xs: '80%', md: '50%' }} mb={'4rem'}>
      <Box
        sx={{ backgroundColor: theme.colors.backgroundColor.gray }}
        p={'0.5rem'}
        borderRadius={theme.borderRadius.border1}
        fontSize={'1rem'}
      >
        <I className={classNames(iconClass, 'red')} />
        <I className={classNames(iconClass, 'yellow')} />
        <I className={classNames(iconClass, 'green')} />
      </Box>
      <Box
        py={{ xs: '1rem', md: '2rem' }}
        px={{ xs: '2rem', md: '3rem' }}
        borderRadius={theme.borderRadius.border2}
        sx={{ backgroundColor: theme.colors.backgroundColor.black }}
        fontSize={'1.5rem'}
        fontFamily={'Courier New, Courier, monospace'}
      >
        {props.text}
      </Box>
    </Box_Wrapper>
  )
}

const Box_Wrapper = styled(Box)`
  p,
  li {
    margin: 1rem 0;
    color: ${theme.colors.white};
  }
  a,
  a:visited {
    font-weight: bold;
  }
  box-shadow: ${theme.colors.boxShadow};
  border-radius: ${theme.borderRadius.border3};
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
