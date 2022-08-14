import { v1 } from 'uuid'
import alien from './images/alien.png'
import cowboy from './images/cowboy.png'
import disgusted from './images/disgusted.png'
import fox from './images/fox.png'
import game from './images/game.jpg'
import ghost from './images/ghost.png'
import heart from './images/heart.png'
import lion from './images/lion.png'
import man1 from './images/man1.png'
import man2 from './images/man2.png'
import melting from './images/melting.png'
import monkey from './images/monkey.png'
import mouse from './images/mouse.png'
import panda from './images/panda.png'
import poo from './images/poo.png'
import smile from './images/smile.png'
import unicorn from './images/unicorn.png'
import woman from './images/woman.png'
import woman2 from './images/woman2.png'

export type CardsType = {
  id: string
  flipped: boolean
  backImage: string
  frontImage: string
}

export const cards: string[] = [
  panda,
  mouse,
  disgusted,
  ghost,
  fox,
  lion,
  man2,
  poo,
  unicorn,
  woman,
]

export const CreateCardsBoard = (): CardsType[] =>
  [...cards, ...cards].map((card, i) => ({
    id: `card${i}`,
    flipped: false,
    backImage: game,
    frontImage: card,
    idMatching: i < cards.length ? `card${i + cards.length}` : `card${i - cards.length}`,
  }))
