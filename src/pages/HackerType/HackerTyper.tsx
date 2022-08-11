import { TbHandClick } from 'react-icons/tb'
import { code } from './code'
import { theme } from '../../helpers/theme'
import React, { useState } from 'react'
import styled from 'styled-components'

type AlertType = 'granted' | 'denied' | null

export type MessageType = {
  type: AlertType
  setAlerts: (alert: AlertType) => void
}

export const Message = (props: MessageType) => {
  return (
    <div>
      {props.type === 'granted' ? (
        <Div_GrantedMessage onClick={() => props.setAlerts(null)}>
          Access Granted
          <TbHandClick />
        </Div_GrantedMessage>
      ) : (
        <Div_DeniedMessage onClick={() => props.setAlerts(null)}>
          Access Denied
          <TbHandClick />
        </Div_DeniedMessage>
      )}
    </div>
  )
}

export const HackerTyper = () => {
  const [alert, setAlert] = useState<AlertType>(null)
  const [index, setIndex] = useState(0)
  const [content, setContent] = useState('')
  const [isLocked, setIsLocked] = useState(false)

  const runCode = () => {
    setIndex(index + 3)
    setContent(code.slice(0, index))
  }

  const setAlerts = (alert: 'granted' | 'denied' | null) => {
    setAlert(alert)
    setIsLocked(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setIsLocked(true)
      setAlert('granted')
    } else if (e.key === 'Escape') {
      setIsLocked(true)
      setAlert('denied')
    } else {
      setIsLocked(false)
      setAlert(null)
      runCode()
    }
  }

  return (
    <Div_Wrapper>
      <TextArea_Code
        value={index === 0 ? 'Please type anything' : content}
        onKeyDown={handleKeyDown}
      />
      {isLocked && <Message type={alert} setAlerts={setAlerts} />}
    </Div_Wrapper>
  )
}

export const Div_Wrapper = styled.div`
  padding: 0;
  margin: 0;
  padding-top: 5rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans', sans-serif;
  background: ${theme.background.backgroundColor};
`
const TextArea_Code = styled.textarea`
  border: none;
  width: 70%;
  height: 50vh;
  background: ${theme.background.backgroundColor}
  padding: 2rem;
  font-size: ${theme.fonts.small};
'&:focus': {
  outline: none
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
  color: ${theme.colors.blue};
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
`
