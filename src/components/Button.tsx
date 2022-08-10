import { colors } from '../helpers/theme'
import styled from 'styled-components'

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
