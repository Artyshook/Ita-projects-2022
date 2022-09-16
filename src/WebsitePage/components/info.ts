import blog from './img/blog.png'
import calculator from './img/calculator.png'
import game from './img/game.png'
import hacker from './img/hacker.png'
import self from './img/self.png'
import todo from './img/todo.png'

export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)']

export const info = {
  firstName: 'Artem',
  lastName: 'Saibel',
  initials: 'AS',
  position: 'a Software Developer',
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
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
      link: 'https://www.instagram.com/artem.saibel',
      icon: ' fa fa-instagram',
      label: 'instagram',
    },
    {
      link: 'https://github.com/Artyshook',
      icon: ' fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/saibel-artem/',
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
      title: 'Blog with local storage',
      live: '/blog',
      source: 'https://github.com/Artyshook/Ita-projects-2022/tree/main/src/pages/Blog',
      image: blog,
    },
    {
      title: 'Mortgage calculator',
      live: '/portfolio/calculator',
      source:
        'https://github.com/Artyshook/Ita-projects-2022/tree/main/src/pages/MortgageCalculator',
      image: calculator,
    },
    {
      title: 'Memory game',
      live: '/portfolio/memory-game',
      source: 'https://github.com/Artyshook/Ita-projects-2022/tree/main/src/pages/MemoryGame',
      image: game,
    },
    {
      title: 'Hacker Typer',
      live: '/portfolio/hacker-typer',
      source: 'https://github.com/Artyshook/Ita-projects-2022/tree/main/src/pages/HackerType',
      image: hacker,
    },
    {
      title: 'Todo List',
      live: '/portfolio/todolist',
      source: 'https://github.com/Artyshook/Ita-projects-2022/tree/main/src/pages/TodoList',
      image: todo,
    },
    {
      title: 'Blog with Server',
      live: '/blog-server',
      source: 'https://github.com/Artyshook/Ita-projects-2022/tree/main/src/pages/BlogWithServer',
      image: blog,
    },
  ],
}
