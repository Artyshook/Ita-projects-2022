import disgusted from './images/disgusted.png'
import fox from './images/fox.png'
import game from './images/game.jpg'
import ghost from './images/ghost.png'
import lion from './images/lion.png'
import man2 from './images/man2.png'
import mouse from './images/mouse.png'
import panda from './images/panda.png'
import poo from './images/poo.png'
import unicorn from './images/unicorn.png'
import woman from './images/woman.png'

export const cards = [panda, mouse, disgusted, ghost, fox, lion, man2, poo, unicorn, woman]

export type CardType = ReturnType<typeof createCardsBoard>[number]

export const createCardsBoard = () =>
  [...cards, ...cards].map((card, i) => ({
    id: `card${i}`,
    flipped: false,
    backImage: game,
    frontImage: card,
    idMatching: i < cards.length ? `card${i + cards.length}` : `card${i - cards.length}`,
  }))
