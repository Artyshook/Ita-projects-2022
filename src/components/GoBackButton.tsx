import { TiArrowBack } from 'react-icons/ti'
import { theme } from '../helpers/theme'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export const GoBackButton = () => {
  let navigate = useNavigate()
  return (
    <Div_NavigateButton>
      <TiArrowBack size='5rem' onClick={() => navigate(-1)}>
        Back
      </TiArrowBack>
    </Div_NavigateButton>
  )
}

export const Div_NavigateButton = styled.div`
  float: left;
  margin: 0 1.5%;
  width: 80%;
  color: ${theme.colors.grey};
  &:hover {
    color: ${theme.colors.blue2};
  }
`
