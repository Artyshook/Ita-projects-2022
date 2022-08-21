import { MortgageDataType, currency } from './MortgageCalculator'
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
        </tr>
      </thead>
      <tbody>
        {' '}
        {props.monthlyPayments.map(el => (
          <tr key={el.month}>
            <td>{el.month}</td>
            <td>{currency(el.interestPaid)}</td>
            <td>{currency(el.interestPaidToDate)}</td>
            <td>{currency(el.principalRepaid)}</td>
            <td>{currency(el.principalRepaidToDate)}</td>
            <td>{currency(el.outstandingBalance)}</td>
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
