import { colors } from '../helpers/theme'
import React from 'react'
import styled from 'styled-components'

type Props = {
  onClick: () => void
  text: string
  disabled: boolean
}
export const My_Button = (props: Props) => {
  return <Div_Button onClick={props?.onClick}>{props.text}</Div_Button>
}

export const Div_Button = styled.button`
  letter-spacing: 1px;
  font-size: 2rem;
  border-radius: 70px;
  color: #00ff7f;
  background-color: ${colors.blue};
  padding: 40px;
  border: none;
  &:hover {
    background: ${colors.blue2};
  }
`
