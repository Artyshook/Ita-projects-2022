import { theme } from '../helpers/theme'
import styled from 'styled-components'

export const Div_Button = styled.button`
  letter-spacing: 1px;
  font-size: 2rem;
  border: 2px solid ${theme.colors.green};
  border-radius: 70px;
  color: ${theme.colors.blue};
  background-color: white;
  padding: 25px;
  box-shadow: ${theme.colors.boxShadow};
  &:hover {
    background: ${theme.colors.blue2};
    color: ${theme.colors.green};
  }
`
