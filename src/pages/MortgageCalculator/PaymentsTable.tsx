import { MortgageDataType, formatCurrency } from './MortgageCalculator'
import { theme } from '../../helpers/theme'
import React from 'react'
import styled from 'styled-components'

type PropsType = {
  monthlyPayments: MortgageDataType[]
  darkMode: boolean
}

export const PaymentsTable = (props: PropsType) => {
  return (
    <Table_Wrapper>
      <Table_Container darkMode={props.darkMode}>
        <thead>
          <TR darkMode={props.darkMode}>
            <TH>Year/Month</TH>
            <TH>Month Interest Paid</TH>
            <TH>Total Interest Paid</TH>
            <TH>Month Principal Repaid</TH>
            <TH>Total Principal Repaid</TH>
            <TH>Mortgage Balance</TH>
            <TH>Money value after inflation</TH>
            <TH>Inflation by month</TH>
          </TR>
        </thead>
        <tbody>
          {props.monthlyPayments.map((el, index) => (
            <TR2 darkMode={props.darkMode} key={index}>
              <TD>{`${el.year}/${el.month}`}</TD>
              <TD>{formatCurrency(el.interestPaid)}</TD>
              <TD>{formatCurrency(el.accumulativeMonthlyInterestPaid)}</TD>
              <TD>{formatCurrency(el.principalRepaid)}</TD>
              <TD>{formatCurrency(el.accumulativeMonthlyPrincipal)}</TD>
              <TD>{formatCurrency(el.outstandingBalance)}</TD>
              <TD>{formatCurrency(el.outstandingBalanceInflation)}</TD>
              <TD>{formatCurrency(el.inflationByMonth)}</TD>
            </TR2>
          ))}
        </tbody>
      </Table_Container>
    </Table_Wrapper>
  )
}

const TH = styled.th`
  position: sticky;
  top: 0;
  padding: 15px 5px;
`
const TR = styled.tr<{ darkMode: boolean }>`
  background: ${props => (props.darkMode ? theme.colors.blue2 : theme.colors.grey)};
`
const TD = styled.td`
  padding: 15px 5px;
`
const TR2 = styled.tr<{ darkMode: boolean }>`
  background: ${props => (props.darkMode ? theme.colors.darkGrey : theme.colors.white)};
  :nth-of-type(even) {
    background: ${props => (props.darkMode ? theme.colors.blue : theme.colors.lightBlue)};
  }
  }
`
const Table_Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Table_Container = styled.table<{ darkMode: boolean }>`
  width: 80%;
  overflow: auto;
`
