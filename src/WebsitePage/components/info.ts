import mock1 from './img/mock1.png'
import mock2 from './img/mock2.png'
import mock3 from './img/mock3.png'
import mock4 from './img/mock4.png'
import mock5 from './img/mock5.png'
import self from './img/self.png'

export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)']

export const info = {
  firstName: 'Artem',
  lastName: 'Saibel',
  initials: 'AS', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Software Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '☕',
      text: 'fueled by coffee',
    },
    {
      emoji: '🌎',
      text: 'based in the Prague',
    },
    {
      emoji: '🦄',
      text: 'Student of Unicorn University',
    },
    {
      emoji: '📧',
      text: 'saibel@seznam.cz',
    },
  ],
  socials: [
    {
      link: 'https://instagram.com',
      icon: ' fa fa-instagram',
      label: 'instagram',
    },
    {
      link: 'https://github.com',
      icon: ' fa fa-github',
      label: 'github',
    },
    {
      link: 'https://linkedin.com',
      icon: ' fa fa-linkedin',
      label: 'linkedin',
    },
  ],
  bio: "Hey! I'm Artem. I'm a frontend developer. Working with my hands to make magic on the internet, I like to discover new coffee shops and enjoy the atmosphere and a cup of coffee.",
  skills: {
    proficientWith: [
      'typescript',
      'react',
      'git',
      'gitlab',
      'html5',
      'css3',
      'styled components',
      'figma',
    ],
    exposedTo: ['nodejs', 'python'],
  },
  hobbies: [
    {
      label: 'studying',
      emoji: '📖',
    },
    {
      label: 'serials',
      emoji: '🎭',
    },
    {
      label: 'paddle boarding',
      emoji: '🌊',
    },
    {
      label: 'cooking',
      emoji: '🌶',
    },
  ],
  portfolio: [
    {
      title: 'Todo List',
      live: '/portfolio/todolist', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/paytonjewell', // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: 'Memory Game',
      live: '/portfolio/memory-game',
      source: 'https://github.com/Artyshook',
      image: mock2,
    },
    {
      title: 'Mortgage Calculator',
      live: '/portfolio/calculator',
      source: 'https://github.com/Artyshook',
      image: mock3,
    },
    {
      title: 'Hacker Typer',
      live: '/portfolio/hacker-typer',
      source: 'https://github.com/Artyshook',
      image: mock4,
    },
    {
      title: 'Blog',
      live: '/blog',
      source: 'https://github.com/Artyshook',
      image: mock5,
    },
    {
      title: 'Blog with Server',
      live: '',
      source: 'https://github.com/Artyshook',
      image: mock5,
    },
  ],
}
