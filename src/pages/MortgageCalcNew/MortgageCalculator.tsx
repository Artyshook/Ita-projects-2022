import { GoBackButton } from '../../components/GoBackButton'
import { PaymentsTable } from './PaymentsTable'
import { handleMortgageDataChange, mortgageCalculation } from '../../helpers/functions'
import { theme } from '../../helpers/theme'
import React, { useState } from 'react'
import styled from 'styled-components'

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

  const localeOptions = {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }

  return (
    <div>
      <GoBackButton />
      <Global>
        <header>
          <Header>Mortgage Calculator</Header>
        </header>
        <GridContainer>
          <GridItem>
            <GridItemHeader>{amountToBorrow.toLocaleString('de-DE', localeOptions)}</GridItemHeader>
            <GridItemLabel>Amount To Borrow</GridItemLabel>
          </GridItem>
          <GridItem>
            <GridItemHeader>{monthlyRate.toLocaleString('de-DE', localeOptions)}</GridItemHeader>
            <GridItemLabel>Monthly Payment</GridItemLabel>
          </GridItem>
          <GridItem>
            <GridItemHeader>
              {totalAmountRepaid.toLocaleString('de-DE', localeOptions)}
            </GridItemHeader>
            <GridItemLabel>Total Repaid</GridItemLabel>
          </GridItem>
          <GridItem>
            <GridItemHeader>
              {totalInterestPaid.toLocaleString('de-DE', localeOptions)}
            </GridItemHeader>
            <GridItemLabel>Total Interest Paid</GridItemLabel>
          </GridItem>
          <GridItem>
            <GridItemHeader>{((depositAmount / propertyValue) * 100).toFixed(1)}%</GridItemHeader>
            <GridItemLabel>Deposit</GridItemLabel>
          </GridItem>
          <GridItem>
            <GridItemHeader>{((amountToBorrow / propertyValue) * 100).toFixed(1)}%</GridItemHeader>
            <GridItemLabel>Loan To Value</GridItemLabel>
          </GridItem>
          <GridItem>
            <GridItemHeader>
              {parseInt(String(propertyValue)).toLocaleString('de-DE', localeOptions)}
            </GridItemHeader>
            <GridItemRangeSlider
              type='range'
              min='50000'
              max='750000'
              step='1000'
              value={propertyValue}
              onChange={event => setPropertyValue(+event.target.value)}
            />
            <GridItemLabel htmlFor='purchasingHousePrice'>Real estate price</GridItemLabel>
          </GridItem>
          <GridItem>
            <GridItemHeader>
              {parseInt(String(depositAmount)).toLocaleString('de-DE', localeOptions)}
            </GridItemHeader>
            <GridItemRangeSlider
              type='range'
              min='1000'
              max='150000'
              step='1000'
              value={depositAmount}
              onChange={event => setDepositAmount(+event.target.value)}
            />
            <GridItemLabel htmlFor='points'>Deposit</GridItemLabel>
          </GridItem>
          <GridItem>
            <GridItemHeader>{mortgageTerm} Years</GridItemHeader>
            <GridItemRangeSlider
              type='range'
              min='5'
              max='35'
              step='1'
              value={mortgageTerm}
              onChange={event => setMortgageTerm(+event.target.value)}
            />
            <GridItemLabel>Mortgage Term</GridItemLabel>
          </GridItem>
          <GridItem>
            <GridItemHeader>{interest}%</GridItemHeader>
            <GridItemRangeSlider
              type='range'
              min='0.1'
              max='8'
              step='0.1'
              value={interest}
              onChange={event => setInterest(+event.target.value)}
            />
            <GridItemLabel>Interest Rate</GridItemLabel>
          </GridItem>
        </GridContainer>
        <PaymentsTable monthlyPayments={monthlyPayments} />
      </Global>
    </div>
  )
}

const Global = styled.div`
  margin: 0;
  width: 100vw;
  height: 100vh;
  text-align: center;
  overflow: scroll;
`
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  padding-bottom: 2rem;
  padding-top: 2rem;
`

const GridItem = styled.div`
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
const GridItemHeader = styled.span`
  font-weight: bold;
  font-size: ${theme.fonts.small};
  margin-bottom: 10px;
`
const GridItemRangeSlider = styled.input`
  margin-bottom: 10px;
`
const GridItemLabel = styled.label`
  font-style: italic;
  font-size: 0.8em;
`

const Header = styled.h1`
  text-align: center;
  padding-top: 2rem;
  font-size: ${theme.fonts.medium};
`
