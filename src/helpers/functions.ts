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

export const mortgageCalculation = (amount: number, interest: number, year: number) => {
  return (amount * (interest / 12 / 100)) / (1 - (1 + interest / 12 / 100) ** -(year * 12))
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
}) => {
  //Set initial values for loop to calculate monthly figures
  let monthDataObject = [
    {
      month: 0,
      outstandingBalance: arg.amountToBorrow,
      interestPaid: 0,
      interestPaidToDate: 0,
      principalRepaid: 0,
      principalRepaidToDate: 0,
      outstandingBalanceInflation: 0,
      inflationByMonth: 0,
    },
  ]
  let outstandingBalance = arg.amountToBorrow
  let interestPaidToDate = 0
  let principalRepaidToDate = 0
  let outstBalalceInflation = 0
  let inflationByMonth = 0
  let previousOutstBalanceInflation = arg.amountToBorrow

  let coefficientOfInflation = 1
  arg.mortgageTerm = arg.mortgageTerm * 12

  //Loop each year of the mortgage term
  for (let i = 1; i <= arg.mortgageTerm; i++) {
    // inflation by month decreasing
    coefficientOfInflation = coefficientOfInflation * (1 + arg.inflationMonthlyRate)
    outstBalalceInflation = arg.amountToBorrow * coefficientOfInflation
    inflationByMonth = previousOutstBalanceInflation - outstBalalceInflation
    previousOutstBalanceInflation = outstBalalceInflation

    //monthly interest paid
    const getMonthInterestPaid = (interest: number, outstandingBalance: number) => {
      return (outstandingBalance * interest) / 100 / 12
    }
    let monthInterestPaid = getMonthInterestPaid(arg.interest, outstandingBalance)

    //accumulative monthly interest paid
    interestPaidToDate = interestPaidToDate + monthInterestPaid

    //monthly principal
    const getMonthPrincipalPaid = (monthlyRate: number, monthInterestPaid: number) => {
      return monthlyRate - monthInterestPaid
    }
    let monthPrincipalPaid = getMonthPrincipalPaid(arg.monthlyRate, monthInterestPaid)

    //accumulative monthly principal
    principalRepaidToDate = principalRepaidToDate + monthPrincipalPaid
    //loan left to pay
    outstandingBalance = outstandingBalance - monthPrincipalPaid

    //There's always around £10 left at the end which forces the fraph to go into minus. This just rounds the last figure off at £0.00.
    if (i === arg.mortgageTerm) {
      outstandingBalance = 0
    }
    monthDataObject.push({
      month: i,
      outstandingBalance: outstandingBalance,
      interestPaid: monthInterestPaid,
      interestPaidToDate: interestPaidToDate,
      principalRepaid: monthPrincipalPaid,
      principalRepaidToDate: principalRepaidToDate,
      outstandingBalanceInflation: outstBalalceInflation,
      inflationByMonth: inflationByMonth,
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
