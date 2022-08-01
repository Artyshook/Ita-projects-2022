import { Button } from '@mui/material'
import { Config, Global, MyContainer } from './Styles.styled'
import React, { Component } from 'react'
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
    })
    this.setState({
      disable: true,
    })
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    })
    this.setState({
      error: '',
    })
    this.setState({
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
      <Global>
        <div>{this.state.error ? this.state.error : `My count: ${this.state.count}`}</div>
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
      </Global>
    )
  }
}
