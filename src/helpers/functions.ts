import { Task } from '../pages/TodoListRedux/store'
import { useEffect, useState } from 'react'

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T>(() => {
    let currentValue

    try {
      currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue))
    } catch (error) {
      currentValue = defaultValue
    }

    return currentValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue] as const
}

export const mixCards = <T>(array: T[]) => {
  return array.sort(() => Math.random() - 0.5)
}

// How mortgage interest is calculated: Formula for monthly principal - https://www.businessinsider.com/personal-finance/how-to-calculate-mortgage-payment
export const monthlyRateCalculation = (arg: { amount: number; interest: number; year: number }) => {
  const monthlyInterest = arg.interest / 100 / 12
  const yearsToMonths = arg.year * 12

  return (arg.amount * monthlyInterest) / (1 - (1 + monthlyInterest) ** -yearsToMonths)
}

export const formatToPercent = (depositAmount: number, propertyValue: number) => {
  return `${((depositAmount / propertyValue) * 100).toFixed()}%`
}

export const handleMortgageDataChange = (arg: {
  amountToBorrow: number
  interest: number
  mortgageTerm: number
  monthlyRate: number
  inflationMonthlyRate: number
  propertyValue: number
  inflationInterest: number
}) => {
  //Set initial values for loop to calculate monthly figures
  let monthDataObject = [
    {
      month: 0,
      outstandingBalance: arg.amountToBorrow,
      interestPaid: 0,
      accumulativeMonthlyInterestPaid: 0,
      principalRepaid: 0,
      accumulativeMonthlyPrincipal: 0,
      outstandingBalanceInflation: 0,
      inflationByMonth: 0,
      propertyValue: arg.propertyValue,
    },
  ]
  let outstandingBalance = arg.amountToBorrow
  let accumulativeMonthlyInterestPaid = 0
  let accumulativeMonthlyPrincipal = 0
  let outstBalalceInflation = 0
  let inflationByMonth = 0
  let propertyValue = arg.propertyValue

  let coefficientOfInflation = 1
  arg.mortgageTerm = arg.mortgageTerm * 12

  //Loop each year of the mortgage term
  for (let i = 1; i <= arg.mortgageTerm; i++) {
    let monthInterestPaid = outstandingBalance * (arg.interest / 100 / 12)
    let monthPrincipalPaid = arg.monthlyRate - monthInterestPaid
    outstandingBalance = outstandingBalance - monthPrincipalPaid

    // inflation by month decreasing
    outstBalalceInflation = outstandingBalance * coefficientOfInflation
    inflationByMonth = monthInterestPaid * coefficientOfInflation
    coefficientOfInflation = coefficientOfInflation * (1 + arg.inflationMonthlyRate)

    accumulativeMonthlyInterestPaid = accumulativeMonthlyInterestPaid + monthInterestPaid
    accumulativeMonthlyPrincipal = accumulativeMonthlyPrincipal + monthPrincipalPaid

    //increased property value
    propertyValue = propertyValue * (1 + arg.inflationInterest / 100 / 12)

    //This just rounds the last figure off at 0.00.
    if (i === arg.mortgageTerm) {
      outstandingBalance = 0
    }
    monthDataObject.push({
      month: i,
      outstandingBalance: outstandingBalance,
      interestPaid: monthInterestPaid,
      accumulativeMonthlyInterestPaid: accumulativeMonthlyInterestPaid,
      principalRepaid: monthPrincipalPaid,
      accumulativeMonthlyPrincipal: accumulativeMonthlyPrincipal,
      outstandingBalanceInflation: outstBalalceInflation,
      inflationByMonth: inflationByMonth,
      propertyValue: propertyValue,
    })
  }
  return monthDataObject
}

export const convertToSlug = (title: string) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const changeOrder = <T>(arr: T[], start: number, end: number): T[] => {
  const dragItem = arr[start]
  const removeDraggedItem = arr.filter((el, index) => index !== start)
  return [...removeDraggedItem.slice(0, end), dragItem, ...removeDraggedItem.slice(end)]
}
