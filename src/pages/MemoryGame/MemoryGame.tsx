import { Card } from './Card'
import { CardType } from './Images'
import { CgSmileMouthOpen } from 'react-icons/cg'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { IoFootstepsSharp } from 'react-icons/io5'
import { createCardsBoard } from './Images'
import { mixCards, sleep } from '../../helpers/functions'
import { theme } from '../../helpers/theme'
import React, { useState } from 'react'
import styled from 'styled-components'

export const MemoryGame = () => {
  const [cards, setCards] = useState(mixCards(createCardsBoard()))
  const [matchedPairs, setMatchedPairs] = useState(0)
  const [turn, setTurn] = useState(0)
  const [clickable, setClickable] = useState(false)
  const [chosenCard, setChosenCard] = useState<CardType | null>(null)

  const resetTurn = () => {
    setTurn(turn + 1)
    setChosenCard(null)
    setClickable(false)
  }
  const handleChoice = async (currentClickedCard: CardType) => {
    if (currentClickedCard.flipped) {
      return
    } else {
      setCards(prev =>
        prev.map(card => (card.id === currentClickedCard.id ? { ...card, flipped: true } : card))
      )
    }
    if (chosenCard === null) {
      setChosenCard(currentClickedCard)
      return
    }
    if (!currentClickedCard && !chosenCard) {
      return
    }
    setClickable(true)
    if (currentClickedCard.idMatching === chosenCard.id) {
      setCards(prevCards =>
        prevCards.map(card =>
          card.frontImage === currentClickedCard.frontImage ? { ...card } : card
        )
      )
      setMatchedPairs(prev => prev + 1)
      resetTurn()
      return
    } else {
      await sleep(600)
      resetTurn()
      setCards(prev =>
        prev.map(card =>
          card.id === currentClickedCard.id || card.id === chosenCard.id
            ? { ...card, flipped: false }
            : card
        )
      )
    }
  }

  const newGameHandleClick = () => {
    setCards(mixCards(createCardsBoard()))
    setTurn(0)
    setMatchedPairs(0)
    setChosenCard(null)
  }

  return (
    <HelmetProvider>
      <Div_GridWrapper>
        <Helmet>
          <title>Artem Saibel - Memory game</title>
          <meta name='description' content='Simple Counter App in React JS' />
        </Helmet>
        <Div_Title>
          <Div_Counter>
            <CgSmileMouthOpen size='3rem' />
            Matches: {matchedPairs}
          </Div_Counter>
          <Div_Counter>
            <IoFootstepsSharp />
            Turns: {turn}
          </Div_Counter>
          <Div_Counter>
            {matchedPairs === cards.length / 2 ? <div>Game Won!</div> : <></>}
          </Div_Counter>
        </Div_Title>
        <Div_Card>
          {cards.map(card => (
            <div key={card.id}>
              <Card card={card} key={card.id} handleChoice={handleChoice} clickable={clickable} />
            </div>
          ))}
        </Div_Card>
        {matchedPairs === cards.length / 2 ? (
          <Button_MyButton onClick={newGameHandleClick}>New Game</Button_MyButton>
        ) : (
          <></>
        )}
      </Div_GridWrapper>
    </HelmetProvider>
  )
}

const Div_GridWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  align-items: start;
  display: flex;
  flex-direction: column;
  font-size: ${theme.fonts.small};
  color: ${theme.colors.blue2};
  text-align: center;
  max-width: 550px;
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
  width: 20rem;
  padding: 2rem;
  color: ${theme.colors.blue};
  font-size: ${theme.fonts.small};
  background: none;
  &:hover {
    background: ${theme.colors.blue2};
    color: ${theme.colors.green};
  }
`
const Div_Title = styled.div`
  display: grid;
  flex-direction: column;
  font-size: ${theme.fonts.medium};
  letter-spacing: 0.02em;
  gap: 1.5rem;
  padding-left: 5rem;
`

const Div_Counter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
