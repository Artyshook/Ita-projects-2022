import { createCardsBoard } from '../pages/MemoryGame/Images'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

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

export const handleMortgageDataChange = (
  amountToBorrow: number,
  interest: number,
  mortgageTerm: number,
  monthlyRate: number
) => {
  let monthDataObject = [
    {
      month: 0,
      outstandingBalance: amountToBorrow,
      interestPaid: 0,
      interestPaidToDate: 0,
      principalRepaid: 0,
      principalRepaidToDate: 0,
    },
  ]
  let outstandingBalance = amountToBorrow
  let interestPaidToDate = 0
  let principalRepaidToDate = 0
  mortgageTerm = mortgageTerm * 12

  //Loop each month of the mortgage term
  for (let i = 1; i <= mortgageTerm; i++) {
    let monthInterestPaid = 0
    let interestPaidMonthlyToMonthIncrementer = 0
    let monthPrincipalPaid = 0
    let monthlyPrincipalRepaidToMonthIncrementer = 0

    monthInterestPaid = (outstandingBalance * interest) / 100 / 12
    monthPrincipalPaid = monthlyRate - monthInterestPaid
    outstandingBalance = outstandingBalance - monthPrincipalPaid
    interestPaidMonthlyToMonthIncrementer =
      interestPaidMonthlyToMonthIncrementer + monthInterestPaid
    monthlyPrincipalRepaidToMonthIncrementer =
      monthlyPrincipalRepaidToMonthIncrementer + monthPrincipalPaid

    interestPaidToDate = interestPaidToDate + interestPaidMonthlyToMonthIncrementer
    principalRepaidToDate = principalRepaidToDate + monthlyPrincipalRepaidToMonthIncrementer

    if (i === mortgageTerm) {
      outstandingBalance = 0
    }

    monthDataObject.push({
      month: i,
      outstandingBalance: parseFloat(outstandingBalance.toFixed(2)),
      interestPaid: parseFloat(interestPaidMonthlyToMonthIncrementer.toFixed(2)),
      interestPaidToDate: parseFloat(interestPaidToDate.toFixed(2)),
      principalRepaid: parseFloat(monthlyPrincipalRepaidToMonthIncrementer.toFixed(2)),
      principalRepaidToDate: parseFloat(principalRepaidToDate.toFixed(2)),
    })
  }
  return monthDataObject
}

// export type MortgageDataType = ReturnType<typeof handleMortgageDataChange>[number]
