import { colors, size } from '../../helpers/theme'
import React from 'react'
import styled from 'styled-components'

export const Home = () => {
  return <Global>Hey, please choose a project!</Global>
}

export const Global = styled.div`
  padding: 0;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  font-size: ${size.fontSize};
  color: ${colors.fontColor};
  background: ${colors.background};
  width: 100%;
  height: ${size.backgroundSize};
  align-items: center;
  display: flex;
  justify-content: center;
`
