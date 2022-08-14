import { CardsType } from './Images'
import { theme } from '../../helpers/theme'
import React from 'react'
import styled, { css } from 'styled-components'

type PropsType = {
  card: CardsType
  handleChoice: (card: CardsType) => void
  flipped: boolean
  clickable: boolean
}
type Props = {
  flipped: boolean
}

export const Card = ({ card, handleChoice, flipped, clickable }: PropsType) => {
  const handleClick = () => {
    if (!clickable) {
      handleChoice(card)
    }
  }

  return (
    <Wrapper onClick={handleClick}>
      <FrontImg src={card.frontImage} alt='card-front' flipped={flipped} />
      <BackImg src={card.backImage} alt='card-back' flipped={flipped} />
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  position: relative;
  perspective: 1000px;
  .front .flipped {
    z-index: 1;
    transform: rotateY(180deg);
  }
`

export const FrontImg = styled.img<Props>`
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  backface-visibility: hidden;
  cursor: pointer;
  transform-style: preserve-3d;
  z-index: ${props => (props.flipped ? 2 : 1)};
  transform: ${props => (props.flipped ? 'rotate(0deg)' : 'rotateY(180deg)')};
`
export const BackImg = styled.img<Props>`
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  backface-visibility: hidden;
  cursor: pointer;
  transform-style: preserve-3d;
  z-index: ${props => (props.flipped ? 1 : 2)};
  transform: ${props => (props.flipped ? 'rotateY(180deg)' : 'rotate(360deg)')};
  position: absolute;
  top: 0px;
  left: 0px;
`
