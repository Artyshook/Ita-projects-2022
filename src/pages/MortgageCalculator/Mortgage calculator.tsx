import { BiCalculator } from 'react-icons/bi'
import { GoBackButton } from '../../components/GoBackButton'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { mortgageCalculation } from '../../helpers/functions'
import { theme } from '../../helpers/theme'
import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components'

export const Calculator = () => {
  const [amount, setStateAmount] = useState(1000)
  const [interest, setStateMortgage] = useState(5)
  const [year, setStateMonth] = useState(1)

  const calculatorHandler = () => {
    return +mortgageCalculation(amount, interest, year).toFixed(2)
  }

  return (
    <HelmetProvider>
      <GoBackButton />
      <Div_Wrapper>
        <Helmet>
          <title>Artem Saibel - Mortgage calculator</title>
          <meta name='description' content='Simple Counter App in React JS' />
        </Helmet>
        <Div_TodoContainer>
          <Div_Title>
            <BiCalculator />
            Mortgage Calculator
          </Div_Title>
          <Div_Form>
            <Div_Header>I&apos;d like to loan:</Div_Header>
            <Input_Input
              value={Math.max(0, amount)}
              type={'number'}
              onChange={event => setStateAmount(+event.currentTarget.value)}
            />
          </Div_Form>
          <Div_Form>
            <Div_Header>Interest from the bank </Div_Header>
            <Input_Input
              value={Math.max(0, interest)}
              type={'number'}
              onChange={event => setStateMortgage(+event.currentTarget.value)}
            />
          </Div_Form>
          <Div_Form>
            <Div_Header>I&apos;d like to pay back in:</Div_Header>
            <Input_Input
              value={year}
              type={'range'}
              onChange={event => setStateMonth(+event.currentTarget.value)}
              name='volume'
              min='1'
              max='30'
            />
            <output name='amount' htmlFor='onYearsChangeHandler'>
              {year} yrs.
            </output>
          </Div_Form>
          <Div_Total>
            {isFinite(calculatorHandler()) ? `Monthly payment: ${calculatorHandler()} CZK` : 0}
          </Div_Total>
        </Div_TodoContainer>
      </Div_Wrapper>
    </HelmetProvider>
  )
}
const Div_Wrapper = styled.div`
  width: 80vw;
  min-height: 80vh;
  font-size: ${theme.fonts.small};
  color: ${theme.colors.blue2};
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  margin: 3rem auto;
  padding-top: 3rem;
`
const Div_TodoContainer = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${theme.colors.boxShadow};
  border: 1px solid ${theme.colors.green};
  border-radius: 20px;
`

export const Div_Title = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: ${theme.fonts.medium};
  letter-spacing: 0.02em;
  margin-bottom: 30px;
`
const Input_Input = styled.input`
  padding: 1.5rem;
  border: 0.3rem solid ${theme.colors.green};
  outline: none;
  border-radius: 30px;
  width: 15rem;
  height: 1.5rem;
  color: ${theme.colors.blue};
  font-size: ${theme.fonts.small};
`
const Div_Form = styled.div`
  font-size: ${theme.fonts.sMedium};
  margin: 1rem auto;
  display: block;
  align-items: center;
`
const Div_Total = styled.div`
  font-size: ${theme.fonts.medium};
  margin: 7rem auto;
  display: block;
  align-items: center;
`
export const Div_Header = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  letter-spacing: 0.01em;
  margin-bottom: 1.5rem;
`
