export const urls = {
  home: '/',
  web: '/web',
  counter: '/counter',
  todolist: '/todolist',
  hackerTyper: '/hacker-typer',
  memoryGame: '/memory-game',
  calculator: '/calculator',
  filter: '/filter',
  httpFilter: '/http-filter',
  blog: '/blog',
  blogWithServer: {
    list: '/blog/list',
    page: '/blog/:blogSlug',
    getBlogSlug: (blogSlug: string) => {
      return `/blog/${blogSlug}`
    },
  },
}
