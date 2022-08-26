import { MortgageDataType, formatCurrency } from './MortgageCalculator'
import { theme } from '../../helpers/theme'
import React from 'react'
import styled from 'styled-components'

type PropsType = {
  monthlyPayments: MortgageDataType[]
}

export const PaymentsTable = (props: PropsType) => {
  return (
    <Table_Container>
      <thead>
        <tr>
          <th>Month</th>
          <th>Month Interest Paid</th>
          <th>Total Interest Paid</th>
          <th>Month Principal Repaid</th>
          <th>Total Principal Repaid</th>
          <th>Mortgage Balance</th>
          <th>Inflation</th>
          <th>Inflation by month</th>
        </tr>
      </thead>
      <tbody>
        {props.monthlyPayments.map(el => (
          <tr key={el.month}>
            <td>{el.month}</td>
            <td>{formatCurrency(el.interestPaid)}</td>
            <td>{formatCurrency(el.interestPaidToDate)}</td>
            <td>{formatCurrency(el.principalRepaid)}</td>
            <td>{formatCurrency(el.principalRepaidToDate)}</td>
            <td>{formatCurrency(el.outstandingBalance)}</td>
            <td>{formatCurrency(el.outstandingBalanceInflation)}</td>
            <td>{formatCurrency(el.inflationByMonth)}</td>
          </tr>
        ))}
      </tbody>
    </Table_Container>
  )
}

const Table_Container = styled.table`
  width: 100%;
  & th {
    position: sticky;
    top: 0;
    background: ${theme.colors.grey};
  }
  & td,
  th {
    padding: 15px 5px;
  }
  & tr:nth-of-type(even) {
    background-color: ${theme.colors.lightBlue};
  }
`
