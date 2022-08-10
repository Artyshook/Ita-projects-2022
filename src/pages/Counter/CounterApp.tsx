import { CgCloseO } from 'react-icons/cg'
import { My_Button } from '../../components/Button'
import { background, colors, fonts } from '../../helpers/theme'
import React, { Component, MouseEventHandler } from 'react'
import styled from 'styled-components'

type Props = {}
type State = {
  count: number
  error: null | string
  disable: boolean
}
export class CounterApp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      count: 10,
      error: null,
      disable: false,
    }
  }

  error = () => {
    this.setState({
      error: "You can't reduce below 0",
      disable: true,
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
      disable: false,
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
      <Div_Wrapper>
        <Div_Value>{this.state.error ?? `My count: ${this.state.count}`}</Div_Value>
        <Div_Config>
          <Div_MyContainer>
            <My_Button onClick={this.increment} text='Increase' disabled={this.state.disable} />
          </Div_MyContainer>
          <Div_MyContainer>
            <My_Button onClick={this.decrement} disabled={this.state.disable} text={'Decrease'} />
          </Div_MyContainer>
        </Div_Config>
        <Div_Icon>
          <CgCloseO onClick={this.reset} size='5rem' />
        </Div_Icon>
      </Div_Wrapper>
    )
  }
}

export const Div_Wrapper = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  gap: 2rem;
  padding-top: 5rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans', sans-serif;
  color: ${colors.blue};
  background: ${background.backgroundColor};
`

export const Div_Value = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${fonts.medium};
  color: ${colors.blue};
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
    color: ${colors.green};
  }
`
