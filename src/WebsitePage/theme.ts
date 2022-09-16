export const theme = {
  colors: {
    purple: '#8D53FF',
    pink: '#CA6BE6',
    white: '#f8f8f8',
    dark: '#1f1f1f',
    red: '#FF6057',
    yellow: '#FFBD2E',
    green: '#27C93F',
    lightgray: '#c9c9c9',
    boxShadow: '0px 8px 10px 0px rgba(0, 0, 0, 0.4)',
    backgroundColor: {
      gray: '#8c8c8c',
      black: '#27242f',
    },
    border: '',
  },
  borderRadius: {
    border1: '0.5rem 0.5rem 0 0',
    border2: '0 0 0.5rem 0.5rem',
    border3: '0.5rem ',
  },
  animation: {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 40,
    },
    end: {
      x: 0,
      opacity: 1,
    },
  },

  transition: {
    duration: 0.3,
  },

  breakpoint: {
    minWidth: {
      mobile: '@media (min-width: 414px)',
      tablet: '@media (min-width:  940px)',
    },
  },
} as const
