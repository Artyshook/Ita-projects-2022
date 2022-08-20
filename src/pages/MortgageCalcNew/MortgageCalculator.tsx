import { GoBackButton } from '../../components/GoBackButton'
import { PaymentsTable } from './PaymentsTable'
import { handleMortgageDataChange, mortgageCalculation } from '../../helpers/functions'
import { theme } from '../../helpers/theme'
import React, { useState } from 'react'
import styled from 'styled-components'

export type MortgageDataType = ReturnType<typeof handleMortgageDataChange>[number]
const localeOptions = {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
}

export const MortgageCalculator = () => {
  const [depositAmount, setDepositAmount] = useState(70000)
  const [propertyValue, setPropertyValue] = useState(250000)
  const [mortgageTerm, setMortgageTerm] = useState(30)
  const [interest, setInterest] = useState(2.5)

  const amountToBorrow = propertyValue - depositAmount
  const monthlyRate = mortgageCalculation(amountToBorrow, interest, mortgageTerm)
  const totalAmountRepaid = monthlyRate * 12 * mortgageTerm
  const totalInterestPaid = totalAmountRepaid - amountToBorrow

  const monthlyPayments = handleMortgageDataChange(
    amountToBorrow,
    interest,
    mortgageTerm,
    monthlyRate
  )

  return (
    <div>
      <GoBackButton />
      <Div_Global>
        <header>
          <H1_Header>Mortgage Calculator</H1_Header>
        </header>
        <Div_GridContainer>
          <Div_GridItem>
            <Span_GridItemHeader>
              {amountToBorrow.toLocaleString('de-DE', localeOptions)}
            </Span_GridItemHeader>
            <Label_GridItemLabel>Amount To Borrow</Label_GridItemLabel>
          </Div_GridItem>
          <Div_GridItem>
            <Span_GridItemHeader>
              {monthlyRate.toLocaleString('de-DE', localeOptions)}
            </Span_GridItemHeader>
            <Label_GridItemLabel>Monthly Payment</Label_GridItemLabel>
          </Div_GridItem>
          <Div_GridItem>
            <Span_GridItemHeader>
              {totalAmountRepaid.toLocaleString('de-DE', localeOptions)}
            </Span_GridItemHeader>
            <Label_GridItemLabel>Total Repaid</Label_GridItemLabel>
          </Div_GridItem>
          <Div_GridItem>
            <Span_GridItemHeader>
              {totalInterestPaid.toLocaleString('de-DE', localeOptions)}
            </Span_GridItemHeader>
            <Label_GridItemLabel>Total Interest Paid</Label_GridItemLabel>
          </Div_GridItem>
          <Div_GridItem>
            <Span_GridItemHeader>
              {((depositAmount / propertyValue) * 100).toFixed(1)}%
            </Span_GridItemHeader>
            <Label_GridItemLabel>Deposit</Label_GridItemLabel>
          </Div_GridItem>
          <Div_GridItem>
            <Span_GridItemHeader>
              {((amountToBorrow / propertyValue) * 100).toFixed(1)}%
            </Span_GridItemHeader>
            <Label_GridItemLabel>Loan To Value</Label_GridItemLabel>
          </Div_GridItem>
          <Div_GridItem>
            <Span_GridItemHeader>
              {parseInt(String(propertyValue)).toLocaleString('de-DE', localeOptions)}
            </Span_GridItemHeader>
            <Input_GridItemRangeSlider
              type='range'
              min='50000'
              max='750000'
              step='1000'
              value={propertyValue}
              onChange={event => setPropertyValue(+event.target.value)}
            />
            <Label_GridItemLabel htmlFor='purchasingHousePrice'>
              Real estate price
            </Label_GridItemLabel>
          </Div_GridItem>
          <Div_GridItem>
            <Span_GridItemHeader>
              {parseInt(String(depositAmount)).toLocaleString('de-DE', localeOptions)}
            </Span_GridItemHeader>
            <Input_GridItemRangeSlider
              type='range'
              min='1000'
              max='150000'
              step='1000'
              value={depositAmount}
              onChange={event => setDepositAmount(+event.target.value)}
            />
            <Label_GridItemLabel htmlFor='points'>Deposit</Label_GridItemLabel>
          </Div_GridItem>
          <Div_GridItem>
            <Span_GridItemHeader>{mortgageTerm} Years</Span_GridItemHeader>
            <Input_GridItemRangeSlider
              type='range'
              min='5'
              max='35'
              step='1'
              value={mortgageTerm}
              onChange={event => setMortgageTerm(+event.target.value)}
            />
            <Label_GridItemLabel>Mortgage Term</Label_GridItemLabel>
          </Div_GridItem>
          <Div_GridItem>
            <Span_GridItemHeader>{interest}%</Span_GridItemHeader>
            <Input_GridItemRangeSlider
              type='range'
              min='0.1'
              max='8'
              step='0.1'
              value={interest}
              onChange={event => setInterest(+event.target.value)}
            />
            <Label_GridItemLabel>Interest Rate</Label_GridItemLabel>
          </Div_GridItem>
        </Div_GridContainer>
        <PaymentsTable monthlyPayments={monthlyPayments} />
      </Div_Global>
    </div>
  )
}

const Div_Global = styled.div`
  margin: 0;
  width: 100vw;
  height: 100vh;
  text-align: center;
  overflow: scroll;
`
const Div_GridContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  padding-bottom: 2rem;
  padding-top: 2rem;
`

const Div_GridItem = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid ${theme.colors.whiteGrey};
  margin: 5px;
  border-radius: 10px;
  &:hover {
    background-color: #d8edff;
    box-shadow: 0 10px gainsboro;
    transition: box-shadow 0.7s;
  }
`
const Span_GridItemHeader = styled.span`
  font-weight: bold;
  font-size: ${theme.fonts.small};
  margin-bottom: 10px;
`
const Input_GridItemRangeSlider = styled.input`
  margin-bottom: 10px;
`
const Label_GridItemLabel = styled.label`
  font-style: italic;
  font-size: 0.8em;
`

const H1_Header = styled.h1`
  text-align: center;
  padding-top: 2rem;
  font-size: ${theme.fonts.medium};
`
