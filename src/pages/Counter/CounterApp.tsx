import { CgCloseO } from 'react-icons/cg'
import { Div_Button } from '../../components/Button'
import { GoBackButton } from '../../components/GoBackButton'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { theme } from '../../helpers/theme'
import React from 'react'
import styled from 'styled-components'

type Props = {}
type State = {
  count: number
  error: null | string
}
export class CounterApp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      count: 10,
      error: null,
    }
  }

  error = () => {
    this.setState({
      error: "You can't reduce below 0",
    })
  }

  reset = () => {
    this.setState({
      count: 0,
      error: null,
    })
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
      error: null,
    })
  }
  decrement = () => {
    if (this.state.count <= 0) {
      this.error()
    } else {
      this.setState({
        count: this.state.count - 1,
      })
    }
  }
  render() {
    return (
      <HelmetProvider>
        <GoBackButton />
        <Div_Wrapper>
          <Helmet>
            <title>Artem Saibel - Counter App</title>
            <meta name='description' content='Simple Counter App in React JS' />
          </Helmet>
          <Div_Value>{this.state.error ?? `My count: ${this.state.count}`}</Div_Value>
          <Div_Config>
            <Div_MyContainer>
              <Div_Button onClick={this.increment}>Increase</Div_Button>
            </Div_MyContainer>
            <Div_MyContainer>
              <Div_Button onClick={this.decrement}>Decrease</Div_Button>
            </Div_MyContainer>
          </Div_Config>
          <Div_Icon>
            <CgCloseO onClick={this.reset} size='5rem' />
          </Div_Icon>
        </Div_Wrapper>
      </HelmetProvider>
    )
  }
}

export const Div_Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: ${theme.colors.blue};
  background: ${theme.background.backgroundColor};
`

export const Div_Value = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${theme.fonts.medium};
  color: ${theme.colors.blue};
`
export const Div_Config = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
`
export const Div_MyContainer = styled.div`
  margin: 1rem;
`
export const Div_Icon = styled.div`
  display: flex;
  justify-content: center;
  &:hover {
    color: ${theme.colors.green};
  }
`
