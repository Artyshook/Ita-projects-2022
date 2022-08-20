import { MortgageDataType } from './MortgageCalculator'
import { theme } from '../../helpers/theme'
import React from 'react'
import styled from 'styled-components'

const localeOptions = {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}

type PropsType = {
  monthlyPayments: MortgageDataType[]
}

export const PaymentsTable = (props: PropsType) => {
  let paymentMonthsArr = []
  for (let i = 0; i < props.monthlyPayments.length; i++) {
    paymentMonthsArr.push(
      <tr key={props.monthlyPayments[i].month}>
        <td>{props.monthlyPayments[i].month}</td>
        <td>{props.monthlyPayments[i].interestPaid.toLocaleString('de-DE', localeOptions)}</td>
        <td>
          {props.monthlyPayments[i].interestPaidToDate.toLocaleString('de-DE', localeOptions)}
        </td>
        <td>{props.monthlyPayments[i].principalRepaid.toLocaleString('de-DE', localeOptions)}</td>
        <td>
          {props.monthlyPayments[i].principalRepaidToDate.toLocaleString('de-DE', localeOptions)}
        </td>
        <td>
          {props.monthlyPayments[i].outstandingBalance.toLocaleString('en-GB', localeOptions)}
        </td>
      </tr>
    )
  }

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
      <tbody>{paymentMonthsArr}</tbody>
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
    background-color: #d8edff;
  }
`
