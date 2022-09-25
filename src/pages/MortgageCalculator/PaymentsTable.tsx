import { MortgageDataType, formatCurrency } from './MortgageCalculator'
import { theme } from '../../helpers/theme'
import React from 'react'
import styled from 'styled-components'

type PropsType = {
  monthlyPayments: MortgageDataType[]
  darkMode: boolean
}

export const PaymentsTable = (props: PropsType) => {
  console.log('darkmode', props.darkMode)
  return (
    <Table_Container darkMode={props.darkMode}>
      <thead>
        <tr>
          <th>Year/Month</th>
          <th>Month Interest Paid</th>
          <th>Total Interest Paid</th>
          <th>Month Principal Repaid</th>
          <th>Total Principal Repaid</th>
          <th>Mortgage Balance</th>
          <th>Money value after inflation</th>
          <th>Inflation by month</th>
        </tr>
      </thead>
      <tbody>
        {props.monthlyPayments.map((el, index) => (
          <tr key={index}>
            <td>{`${el.year}/${el.month}`}</td>
            <td>{formatCurrency(el.interestPaid)}</td>
            <td>{formatCurrency(el.accumulativeMonthlyInterestPaid)}</td>
            <td>{formatCurrency(el.principalRepaid)}</td>
            <td>{formatCurrency(el.accumulativeMonthlyPrincipal)}</td>
            <td>{formatCurrency(el.outstandingBalance)}</td>
            <td>{formatCurrency(el.outstandingBalanceInflation)}</td>
            <td>{formatCurrency(el.inflationByMonth)}</td>
          </tr>
        ))}
      </tbody>
    </Table_Container>
  )
}

const Table_Container = styled.table<{ darkMode: boolean }>`
  width: 100%;
  & th {
    position: sticky;
    top: 0;
    background: ${theme.colors.grey};
    background: ${props => (props.darkMode ? theme.colors.darkGrey : theme.colors.grey)};
  }
  & td,
  th {
    padding: 15px 5px;
  }
  & tr:nth-of-type(even) {
    background: ${props => (props.darkMode ? theme.colors.blue : theme.colors.lightBlue)};
  }
`
