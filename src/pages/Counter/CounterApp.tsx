import { Button, Container } from '@mui/material'
import { Wrapper } from '../../helpers/theme'
import React, { Component } from 'react'
import styled from 'styled-components'

type Props = {}
type State = {
  count: number
  error: string
  disable: boolean
}
export class CounterApp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      count: 0,
      error: '',
      disable: false,
    }
  }

  error = () => {
    this.setState({
      error: "You can't reduce below 0",
      disable: true,
    })
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
      error: '',
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
      <Wrapper>
        <div>{this.state.error || `My count: ${this.state.count}`}</div>
        <Config>
          <MyContainer>
            <Button variant='contained' onClick={this.increment}>
              Increase
            </Button>
          </MyContainer>
          <MyContainer>
            <Button variant='contained' onClick={this.decrement} disabled={this.state.disable}>
              Decrease
            </Button>
          </MyContainer>
        </Config>
      </Wrapper>
    )
  }
}

export const Config = styled.div`
  margin-top: 10px;
`
export const MyContainer = styled.span`
  margin-right: 5px;
`
