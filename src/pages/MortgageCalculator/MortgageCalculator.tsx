import { GoBackButton } from '../../components/GoBackButton'
import { Graph } from './Graph'
import { PaymentsTable } from './PaymentsTable'
import {
  formatToPercent,
  handleMortgageDataChange,
  mortgageCalculation,
} from '../../helpers/functions'
import { inflationMonthlyRate } from '../../helpers/inflationMonthlyRate'
import { theme } from '../../helpers/theme'
import React, { useState } from 'react'
import styled from 'styled-components'

export type MortgageDataType = ReturnType<typeof handleMortgageDataChange>[number]

export const formatCurrency = (value: number) => {
  return Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: 'CZK',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value)
}

export const MortgageCalculator = () => {
  const [depositAmount, setDepositAmount] = useState(1_000_000)
  const [propertyPrice, setPropertyPrice] = useState(3_000_000)
  const [mortgageTerm, setMortgageTerm] = useState(30)
  const [interest, setInterest] = useState(4.99)
  const [inflationInterest, setInflationInterest] = useState(5)

  const amountToBorrow = propertyPrice - depositAmount
  const monthlyRate = mortgageCalculation(amountToBorrow, interest, mortgageTerm)
  const totalAmountRepaid = monthlyRate * 12 * mortgageTerm
  const totalInterestPaid = totalAmountRepaid - amountToBorrow
  const inflationByMonth = inflationMonthlyRate(inflationInterest)

  let arg = {
    amountToBorrow: amountToBorrow,
    interest: interest,
    mortgageTerm: mortgageTerm,
    monthlyRate: monthlyRate,
    inflationMonthlyRate: inflationByMonth,
  }
  const monthlyPayments = handleMortgageDataChange(arg)

  return (
    <div>
      <Div_Global>
        <header>
          <H1_Header>Mortgage Calculator</H1_Header>
        </header>
        <Div_GridContainer>
          <Div_GridItem>
            <Span_GridItemHeader>{formatCurrency(amountToBorrow)}</Span_GridItemHeader>
            <Label_GridItemLabel>Amount To Borrow</Label_GridItemLabel>
          </Div_GridItem>
          <Div_GridItem>
            <Span_GridItemHeader>{formatCurrency(monthlyRate)}</Span_GridItemHeader>
            <Label_GridItemLabel>Monthly Payment</Label_GridItemLabel>
          </Div_GridItem>
          <Div_GridItem>
            <Span_GridItemHeader>{formatCurrency(totalAmountRepaid)}</Span_GridItemHeader>
            <Label_GridItemLabel>Total Repaid</Label_GridItemLabel>
          </Div_GridItem>
          <Div_GridItem>
            <Span_GridItemHeader>{formatCurrency(totalInterestPaid)}</Span_GridItemHeader>
            <Label_GridItemLabel>Total Interest Paid</Label_GridItemLabel>
          </Div_GridItem>
          <Div_GridItem>
            <Span_GridItemHeader>
              {formatToPercent(depositAmount, propertyPrice)}
            </Span_GridItemHeader>
            <Label_GridItemLabel>Deposit</Label_GridItemLabel>
          </Div_GridItem>
          <Div_GridItem>
            <Span_GridItemHeader>
              {formatToPercent(amountToBorrow, propertyPrice)}
            </Span_GridItemHeader>
            <Label_GridItemLabel>Loan To Value</Label_GridItemLabel>
          </Div_GridItem>
          <Div_GridItem>
            <Span_GridItemHeader>{formatCurrency(propertyPrice)}</Span_GridItemHeader>
            <Input_GridItemRangeSlider
              type='range'
              min='500000'
              max='10000000'
              step='1000'
              value={propertyPrice}
              onChange={event => setPropertyPrice(+event.target.value)}
            />
            <Label_GridItemLabel htmlFor='purchasingHousePrice'>
              Real estate price
            </Label_GridItemLabel>
          </Div_GridItem>
          <Div_GridItem>
            <Span_GridItemHeader>{formatCurrency(depositAmount)}</Span_GridItemHeader>
            <Input_GridItemRangeSlider
              type='range'
              min='500000'
              max='10000000'
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
              max='15'
              step='0.1'
              value={interest}
              onChange={event => setInterest(+event.target.value)}
            />
            <Label_GridItemLabel>Interest rate</Label_GridItemLabel>
            <Span_GridItemHeader>{inflationInterest}%</Span_GridItemHeader>
            <Input_GridItemRangeSlider
              value={Math.max(0, inflationInterest)}
              type='range'
              min='0.1'
              max='20'
              step='0.1'
              onChange={e => setInflationInterest(+e.currentTarget.value)}
            />
            <Label_GridItemLabel>Inflation rate</Label_GridItemLabel>
          </Div_GridItem>
        </Div_GridContainer>
        <Graph calculatedMortgage={monthlyPayments} />
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
    background-color: ${theme.colors.lightBlue};
    box-shadow: 0 10px gainsboro;
    transition: box-shadow 0.3s;
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
  font-size: ${theme.fonts.xs};
`

const H1_Header = styled.h1`
  text-align: center;
  padding-top: 2rem;
  font-size: ${theme.fonts.medium};
`
