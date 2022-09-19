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

export const monthlyRateCalculation = (amount: number, interest: number, year: number) => {
  return (amount * (interest / 12 / 100)) / (1 - (1 + interest / 12 / 100) ** -(year * 12))
  // (amount * (interest / 12 / 100)) / (1 - (1 + interest / 12 / 100) ** -(year * 12))
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
      interestPaidToDate: 0,
      principalRepaid: 0,
      principalRepaidToDate: 0,
      outstandingBalanceInflation: 0,
      inflationByMonth: 0,
      propertyValue: arg.propertyValue,
    },
  ]
  let outstandingBalance = arg.amountToBorrow
  let interestPaidToDate = 0
  let principalRepaidToDate = 0
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

    //accumulative monthly interest paid
    interestPaidToDate = interestPaidToDate + monthInterestPaid

    //accumulative monthly principal
    principalRepaidToDate = principalRepaidToDate + monthPrincipalPaid
    //loan left to pay

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
      interestPaidToDate: interestPaidToDate,
      principalRepaid: monthPrincipalPaid,
      principalRepaidToDate: principalRepaidToDate,
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
