export const urls = {
  home: '/',
  web: '/web',
  counter: '/counter',
  todolist: '/todolist',
  hackerTyper: '/hacker-typer',
  memoryGame: '/memory-game',
  calculator: '/calculator',
  filter: '/filter',
  blog: 'blog',
  newPost: '/blog/new-article',
  httpFilter: 'http-filter',
}
export const filterByName = (name: string) => {
  return `${process.env.REACT_APP_URL}${name}`
}
