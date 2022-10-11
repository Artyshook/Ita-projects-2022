import { MortgageDataType, formatCurrency } from './MortgageCalculator'
import { theme } from '../../helpers/theme'
import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

type PropsType = {
  monthlyPayments: MortgageDataType[]
  darkMode: boolean
  visibleYear: number
  setVisibleYear: Dispatch<SetStateAction<number>>
}

export const PaymentsTable = (props: PropsType) => {
  return (
    <Table_Wrapper>
      <Table_Container>
        <thead>
          <TR darkMode={props.darkMode}>
            <TH darkMode={props.darkMode}>Year/Month</TH>
            <TH darkMode={props.darkMode}>Month Interest Paid</TH>
            <TH darkMode={props.darkMode}>Total Interest Paid</TH>
            <TH darkMode={props.darkMode}>Month Principal Repaid</TH>
            <TH darkMode={props.darkMode}>Total Principal Repaid</TH>
            <TH darkMode={props.darkMode}>Mortgage Balance</TH>
            <TH darkMode={props.darkMode}>Money value after inflation</TH>
            <TH darkMode={props.darkMode}>Inflation by month</TH>
          </TR>
        </thead>
        <tbody>
          {props.monthlyPayments.map((el, index) => (
            <TR2
              darkMode={props.darkMode}
              key={index}
              expandeble={el.month === 1 || props.visibleYear === el.year ? 1 : 0}
              visibleYear={props.visibleYear}
              month={el.month}
              year={el.year}
              onClick={() => props.setVisibleYear(el.year)}
            >
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

type TrProps = {
  darkMode: boolean
  expandeble: number
  visibleYear: number
  month: number
  year: number
}

const TH = styled.th<{ darkMode: boolean }>`
  position: sticky;
  top: 0;
  padding: 15px 5px;
  background: ${props => (props.darkMode ? theme.colors.blue2 : theme.colors.lightBlue)};
`
const TR = styled.tr<{ darkMode: boolean }>`
  background: ${props => (props.darkMode ? theme.colors.blue : theme.colors.grey)};
`

const TD = styled.td`
  padding: 15px 5px;
  cursor: pointer;
`
const TR2 = styled.tr<TrProps>`
  display: ${props => (props.expandeble === 1 ? '' : 'none')};
  background: ${props =>
    props.month === 1
      ? props.visibleYear === props.year
        ? theme.colors.green
        : props.darkMode
        ? theme.colors.dark
        : theme.colors.whiteGrey
      : 'transportable'};
`
const Table_Wrapper = styled.div`
  padding: 10px 180px;
  ${theme.breakpoint.phone} {
    padding: 0;
  }
  ${theme.breakpoint.tablet} {
    padding: 0;
  }
`
const Table_Container = styled.table`
  width: 100%;
  overflow: auto;
  // ${theme.breakpoint.phone} {
  //   overflow: auto;
  // }
`
