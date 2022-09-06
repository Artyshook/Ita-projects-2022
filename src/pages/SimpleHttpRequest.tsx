import { BiSearchAlt2 } from 'react-icons/bi'
import { theme } from '../helpers/theme'
import React, { useState } from 'react'
import styled from 'styled-components'

type Users = {
  id: string
  name: string
  city: string
  gender: string
}[]
//
// export const SimpleHttpRequest = () => {
//   const [data, setData] = useState([] as Users)
//   const [error, setError] = useState('')
//   const [loading, setLoading] = useState(false)
//   const [inputValue, setInputValue] = useState('')
//
//   const serverCall = async () => {
//     try {
//       setLoading(true)
//       const response = await fetch(filterByName(inputValue))
//       setError('')
//       setData(await response.json())
//     } catch (err) {
//       if (err) setError('Can`t fetch data')
//     } finally {
//       setLoading(false)
//     }
//   }
//   return (
//     <Div_Wrapper>
//       <Div_Title>Filter by name</Div_Title>
//       <Div_Input>
//         <Input_Input
//           type='search'
//           value={inputValue}
//           onChange={e => setInputValue(e.currentTarget.value)}
//           placeholder='Search...'
//         />
//         <Button_MyButton onClick={serverCall}>
//           <BiSearchAlt2 />
//         </Button_MyButton>
//       </Div_Input>
//       {error ? (
//         <div>{error}</div>
//       ) : loading ? (
//         <div>Wait please</div>
//       ) : (
//         <Div_Users>
//           {data.map(el => (
//             <div key={el.id}>
//               <Li_Users>{el.name}</Li_Users>
//             </div>
//           ))}
//         </Div_Users>
//       )}
//     </Div_Wrapper>
//   )
// }
//
// export const Div_Wrapper = styled.div`
//   width: 100vw;
//   height: 80vh;
//   align-items: center;
//   text-align: center;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
//   background: ${theme.background.backgroundColor};
//   color: ${theme.colors.blue};
// `
//
// const Div_Input = styled.div`
//   border: 1px solid ${theme.colors.blue};
//   border-radius: 40px;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   margin-left: 2rem;
// `
// const Input_Input = styled.input`
//   margin: 1rem;
//   outline: none;
//   border: none;
//   color: ${theme.colors.darkGrey};
//   font-size: ${theme.fonts.small};
//   &:hover {
//     border-color: ${theme.colors.blue};
//   }
// `
// const Button_MyButton = styled.button`
//   letter-spacing: 1px;
//   font-size: 1.5rem;
//   border-radius: 60px;
//   border: none;
//   color: #00ff7f;
//   background-color: ${theme.colors.blue};
//   height: 5rem;
//   width: 7rem;
//   justify-content: center;
//   align-items: center;
//   &:hover {
//     background: ${theme.colors.blue2};
//   }
// `
// const Li_Users = styled.li`
//   display: flex;
//   min-width: 20rem;
//   justify-content: space-between;
//   padding: 1rem;
//   input {
//     padding: 0;
//     margin: 0;
//     width: 3rem;
//   }
//   border: 0.2rem solid ${theme.colors.grey};
//   border-radius: 20px;
//   margin: 0.5rem;
//   box-shadow: ${theme.colors.boxShadow};
//   &:hover {
//     border: 2px solid ${theme.colors.blue};
//   }
// `
// const Div_Users = styled.div`
//   font-size: ${theme.fonts.small};
//   margin-left: 2rem;
//   max-height: 700px;
// `
// const Div_Title = styled.div`
//   display: block;
//   font-size: ${theme.fonts.large};
//   margin-bottom: 2rem;
//   color: ${theme.colors.grey};
//   &:hover {
//     color: ${theme.colors.blue};
//   }
// `
