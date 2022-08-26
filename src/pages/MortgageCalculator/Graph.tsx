import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { handleMortgageDataChange } from '../../helpers/functions'
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
    }))

  return (
    <Div_Global>
      <Div_Container>
        <Div_Item>
          <LineChart
            width={600}
            height={300}
            data={chartData}
            margin={{
              top: 15,
              right: 30,
              left: 10,
              bottom: 15,
            }}
          >
            <CartesianGrid stroke='#eee' strokeDasharray='3 3' />
            <XAxis dataKey='index' interval={10} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type='monotone'
              dataKey='remain'
              fill='#82ca9d'
              stroke='#82ca9d'
              name='Remain to pay by Month'
            />
            <Line
              type='monotone'
              dataKey='outstandingBalanceInflation'
              stroke='red'
              name='Overall inflation'
            />
          </LineChart>
          <LineChart
            width={600}
            height={300}
            data={chartData}
            margin={{
              top: 15,
              right: 30,
              left: 10,
              bottom: 15,
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
              fill='#8884d8'
              stroke='red'
              name='Inflation by Month'
            />
          </LineChart>
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
  padding-top: 2rem;
`
const Div_Global = styled.div`
  margin: 0;
  width: 100vw;
  text-align: center;
  overflow: scroll;
`
const Div_Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 5px;
  border-radius: 10px;
`
