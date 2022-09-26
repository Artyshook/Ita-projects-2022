import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { handleMortgageDataChange } from '../../helpers/functions'
import { theme } from '../../helpers/theme'
import React from 'react'
import styled from 'styled-components'

const formatDecimals = (item: number) => {
  return Number(item.toFixed(2))
}

type PropsType = {
  calculatedMortgage: DataCalculateMortgage
}
type DataCalculateMortgage = ReturnType<typeof handleMortgageDataChange>

export const Graph = (props: PropsType) => {
  const chartData = props.calculatedMortgage
    .filter(el => el.month)
    .map((el, index) => ({
      xAxis: { index },
      interestPaid: formatDecimals(el.interestPaid),
      principalPaid: formatDecimals(el.principalRepaid),
      remain: formatDecimals(el.outstandingBalance),
      outstandingBalanceInflation: formatDecimals(el.outstandingBalanceInflation),
      inflationByMonth: formatDecimals(el.inflationByMonth),
      propertyValue: formatDecimals(el.propertyValue),
    }))

  return (
    <Div_Global>
      <Div_Container>
        <Div_Item>
          <ResponsiveContainer width='100%' height='90%'>
            <LineChart
              width={700}
              height={400}
              data={chartData}
              margin={{
                right: 30,
                left: 20,
              }}
            >
              <CartesianGrid stroke='#eee' strokeDasharray='3 3' />
              <XAxis dataKey='XAxis' interval={10} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type='monotone'
                dataKey='remain'
                fill='#82ca9d'
                stroke='#82ca9d'
                activeDot={{ r: 8 }}
                name='Remain to pay by Month'
              />
              <Line
                type='monotone'
                dataKey='outstandingBalanceInflation'
                stroke='#F3C84B'
                activeDot={{ r: 8 }}
                name='Overall inflation'
              />
              <Line
                type='monotone'
                dataKey='propertyValue'
                fill='blue'
                stroke='blue'
                name='Property value affected by Inflation'
              />
            </LineChart>
          </ResponsiveContainer>
          <ResponsiveContainer width='100%' height='90%'>
            <LineChart
              width={700}
              height={400}
              data={chartData}
              margin={{
                right: 30,
                left: 20,
              }}
            >
              <CartesianGrid stroke='#eee' strokeDasharray='3 3' />
              <XAxis dataKey='xAxis' interval={10} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type='monotone'
                dataKey='interestPaid'
                strokeWidth={1}
                fill='#82ca9d'
                stroke='#82ca9d'
                activeDot={{ r: 8 }}
                name='Interest paid by Month'
              />
              <Line
                type='monotone'
                dataKey='principalPaid'
                strokeWidth={1}
                activeDot={{ r: 8 }}
                fill='#8884d8'
                stroke='#8884d8'
                name='Principal paid by Month'
              />
              <Line
                type='monotone'
                dataKey='inflationByMonth'
                strokeWidth={1}
                activeDot={{ r: 8 }}
                fill='#eeee'
                stroke='#F3C84B'
                name='Inflation by Month'
              />
            </LineChart>
          </ResponsiveContainer>
        </Div_Item>
      </Div_Container>
    </Div_Global>
  )
}

const Div_Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  grid-template-columns: 50% 50%;
  padding-bottom: 2rem;
`
const Div_Global = styled.div`
  margin: 0;
  text-align: center;
  overflow: scroll;
`
const Div_Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
  height: 500px;
  width: 90%;
  ${theme.breakpoint.phone} {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-height: 400px;
  }
`
