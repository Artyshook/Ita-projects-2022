import { BiCalculator } from 'react-icons/bi'
import { mortgageCalculation } from '../../helpers/functions'
import { theme } from '../../helpers/theme'
import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components'

export const Calculator = () => {
  const [amount, setStateAmount] = useState(1000)
  const [interest, setStateMortgage] = useState(5)
  const [year, setStateMonth] = useState(1)
  const [result, setResult] = useState(0)

  const onAmountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setStateAmount(+event.currentTarget.value)
    CalculatorHandler()
  }
  const onMortgageRateHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setStateMortgage(+event.currentTarget.value)
    CalculatorHandler()
  }
  const onYearsChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setStateMonth(+event.currentTarget.value)
    CalculatorHandler()
  }
  const CalculatorHandler = () => {
    setResult(+mortgageCalculation(amount, interest, year).toFixed(2))
    CalculatorHandler()
  }

  return (
    <Div_Wrapper>
      <Div_Title>
        <BiCalculator />
        Mortgage Calculator
      </Div_Title>
      <Div_Form>
        <Div_Header>I&apos;d like to loan:</Div_Header>
        <Input_Input
          value={amount >= 0 ? amount : 0}
          type={'number'}
          onChange={onAmountChangeHandler}
        />
      </Div_Form>
      <Div_Form>
        <Div_Header>Interest from the bank </Div_Header>
        <Input_Input
          value={interest >= 0 ? interest : 0}
          type={'number'}
          onChange={onMortgageRateHandler}
        />
      </Div_Form>
      <Div_Form>
        <Div_Header>I&apos;d like to pay back in:</Div_Header>
        <Input_Input
          value={year}
          type={'range'}
          onChange={onYearsChangeHandler}
          name='volume'
          min='1'
          max='30'
        />
        <output id='amount' name='amount' htmlFor='onYearsChangeHandler'>
          {year} yrs.
        </output>
      </Div_Form>
      <Div_Total>{isFinite(result) ? `Monthly payment: ${result} CZK` : 0}</Div_Total>
    </Div_Wrapper>
  )
}
const Div_Wrapper = styled.div`
  height: 80vh;
  font-size: ${theme.fonts.small};
  color: ${theme.colors.blue2};
  text-align: center;
  justify-content: center;
  max-width: 560px;
  margin: 3rem auto;
  border: 1px solid ${theme.colors.green};
  border-radius: 20px;
  padding-top: 3rem;
  box-shadow: 6px 4px 8px 0px rgba(34, 60, 80, 0.2);
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
  margin: 4rem auto;
  display: block;
  align-items: center;
  gap: 3rem;
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
