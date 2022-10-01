import { Helmet, HelmetProvider } from 'react-helmet-async'
import { TbHandClick } from 'react-icons/tb'
import { code } from './code'
import { services } from '../../helpers/services'
import { theme } from '../../helpers/theme'
import { useAsyncComponentDidMount } from '../../helpers/UseComponentDidMount'
import React, { Dispatch, SetStateAction, useState } from 'react'
import styled from 'styled-components'

type AlertType = 'ACCESS GRANTED' | 'ACCESS DENIED' | null
type AlertPropsType = {
  alertMessage: AlertType
  setAlertMessage: Dispatch<AlertType>
}

type DarkModeProps = {
  darkMode: Dispatch<SetStateAction<boolean>>
}

export const CheckAlert = (props: AlertPropsType) => {
  switch (props.alertMessage) {
    case 'ACCESS GRANTED':
      return (
        <Div_GrantedMessage onClick={() => props.setAlertMessage(null)}>
          ACCESS GRANTED
          <TbHandClick />
        </Div_GrantedMessage>
      )
    case 'ACCESS DENIED':
      return (
        <Div_DeniedMessage onClick={() => props.setAlertMessage(null)}>
          ACCESS DENIED
          <TbHandClick />
        </Div_DeniedMessage>
      )
    case null:
      return null
  }
}

export const HackerTyper = (props: DarkModeProps) => {
  const [index, setIndex] = useState(0)
  const [alertMessage, setAlertMessage] = useState<'ACCESS DENIED' | 'ACCESS GRANTED' | null>(null)

  useAsyncComponentDidMount(async () => {
    try {
      props.darkMode(true)
    } catch (error) {}
  })

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setAlertMessage('ACCESS DENIED')
    } else if (e.key === 'Escape') {
      setAlertMessage('ACCESS GRANTED')
    } else {
      setAlertMessage(null)
      setIndex(index + 7)
    }
  }

  return (
    <HelmetProvider>
      <Div_Wrapper>
        <Helmet>
          <title>Artem Saibel - Hacker Typer</title>
          <meta name='description' content='Hacker Typer app in React JS' />
        </Helmet>
        <TextArea_Code
          value={index === 0 ? 'Please type anything' : code.slice(0, index)}
          onKeyDown={handleKeyDown}
        />
        <CheckAlert alertMessage={alertMessage} setAlertMessage={setAlertMessage} />
      </Div_Wrapper>
    </HelmetProvider>
  )
}

export const Div_Wrapper = styled.div`
  width: 100vw;
  height: 90vh;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans', sans-serif;
  background: black;
  color: #03a062;
`
const TextArea_Code = styled.textarea`
  border: 2px solid ${theme.colors.green};
  width: 100%;
  height: 100vh;
  background: black;
  color: #03a062;
  padding: 2rem;
  hyphens: none;
  font-size: ${theme.fonts.small};
  '&:focus': {
    outline: none;
  }
`
const Div_DeniedMessage = styled.div`
  font-size: ${theme.fonts.medium};
  color: red;
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 0;
  top: 0;
  left: 0;
  transform: translate(0, 0);
`
const Div_GrantedMessage = styled.div`
  font-size: ${theme.fonts.medium};
  color: ${theme.colors.green};
  align-items: center;
  flex-direction: column;
  display: flex;
  position: fixed;
  height: 100%;
  width: 100%;
  justify-content: center;
  z-index: 0;
  top: 0;
  left: 0;
  transform: translate(0, 0);
  animation: blinker 2s infinite;
`
