import { Card } from './Card'
import { CardsType, CreateCardsBoard } from './Images'
import { CgSmileMouthOpen } from 'react-icons/cg'
import { IoFootstepsSharp } from 'react-icons/io5'
import { mixCards } from '../../helpers/functions'
import { theme } from '../../helpers/theme'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export const Pexeso = () => {
  const [cards, setCards] = useState<CardsType[]>(mixCards(CreateCardsBoard()))
  const [matchedPairs, setMatchedPairs] = useState(0)
  const [card1, setCard1] = useState<CardsType | null>(null)
  const [card2, setCard2] = useState<CardsType | null>(null)
  const [turn, setTurn] = useState(0)
  const [won, setWon] = useState<string | null>()
  const [clickable, setClickable] = useState(false)

  const handleChoise = (card: CardsType) => {
    if (card.id === card1?.id) return
    card1 ? setCard2(card) : setCard1(card)
  }

  useEffect(() => {
    if (card1 && card2) {
      setClickable(true)
      if (card1.frontImage === card2.frontImage) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.frontImage === card1.frontImage) {
              return { ...card, flipped: true, clickable: false }
            } else {
              return card
            }
          })
        })
        setMatchedPairs(prev => prev + 1)
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 500)
      }
    }
  }, [card1, card2])

  React.useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      setWon('Game Won!')
    }
  }, [matchedPairs])

  const resetTurn = () => {
    setCard1(null)
    setCard2(null)
    setTurn(turn + 1)
    setClickable(false)
  }

  const newGameHandleClick = () => {
    setCards(mixCards(CreateCardsBoard()))
    setTurn(0)
    setMatchedPairs(0)
    setWon(null)
  }

  return (
    <Div_GridWrapper>
      <Div_Title>
        <Div_Counter>
          <CgSmileMouthOpen size='3rem' />
          Matching pairs total: {matchedPairs}
        </Div_Counter>
        <Div_Counter>
          <IoFootstepsSharp />
          Turns: {turn}
        </Div_Counter>
        <Div_Counter>{won && <div>{won}</div>}</Div_Counter>
      </Div_Title>
      <Div_Card>
        {cards.map(card => (
          <div key={card.id}>
            <Card
              card={card}
              key={card.id}
              handleChoice={handleChoise}
              flipped={card === card1 || card === card2 || card.flipped}
              clickable={clickable}
            />
          </div>
        ))}
      </Div_Card>
      <Button_MyButton onClick={newGameHandleClick}>New Game</Button_MyButton>
    </Div_GridWrapper>
  )
}

const Div_GridWrapper = styled.div`
  height: 100vh;
  font-size: ${theme.fonts.small};
  color: ${theme.colors.blue2};
  text-align: center;
  max-width: 860px;
  margin: 3rem auto;
`
const Div_Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  padding: 4rem;
`
const Button_MyButton = styled.button`
  border: 0.2rem solid ${theme.colors.blue2};
  border-radius: 30px;
  padding: 2rem;
  color: ${theme.colors.blue};
  font-size: ${theme.fonts.small};
  background: none;
  &:hover {
    background: ${theme.colors.blue2};
    color: ${theme.colors.green};
  }
`
export const Div_Title = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${theme.fonts.medium};
  letter-spacing: 0.02em;
  gap: 1.5rem;
  padding-left: 5rem;
`

export const Div_Counter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
