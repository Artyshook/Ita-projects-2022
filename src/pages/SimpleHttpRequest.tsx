import { filterByName } from '../helpers/urls'
import React, { useState } from 'react'

type Users = {
  id: string
  name: string
  city: string
  gender: string
}

export const SimpleHttpRequest = () => {
  const [data, setData] = useState([] as Users[])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const serverCall = async () => {
    try {
      setLoading(true)
      const response = await fetch(filterByName(inputValue))
      setError('')
      setData(await response.json())
    } catch (err) {
      if (err) setError('Can`t fetch data')
    } finally {
      setLoading(false)
    }
  }
  console.log(data)

  return (
    <div>
      (
      <div>
        <h1>Http Filter</h1>
        <input
          type='search'
          value={inputValue}
          onChange={e => setInputValue(e.currentTarget.value)}
          placeholder='Search...'
          onKeyDown={serverCall}
        />
        <button onClick={serverCall}></button>
        {error ? <div>{error}</div> : loading ? <div>Wait please</div> : <div>success!</div>}
      </div>
      )
    </div>
  )
}
