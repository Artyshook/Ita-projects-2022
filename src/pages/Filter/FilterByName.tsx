import React from 'react'
import axios from 'axios'

export const FilterByName = () => {
  // const onClickHandler = async () => {
  //   const response = await fetch('https://localhost:1234')
  //   console.log(response)
  // }
  return (
    <div>
      <button
        onClick={async () => {
          axios
            .get('http://localhost:1234')
            .then(response => {
              console.log(response)
            })
            .catch(error => {
              console.log(error)
            })
        }}
      >
        get from server
      </button>
    </div>
  )
}
