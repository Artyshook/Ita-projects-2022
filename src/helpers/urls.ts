export const urls = {
  home: '/',
  about: '/about',
  portfolio: '/portfolio',
  web: '/web',
  counter: '/counter',
  todolist: '/portfolio/todolist',
  hackerTyper: '/portfolio/hacker-typer',
  memoryGame: '/portfolio/memory-game',
  calculator: '/portfolio/calculator',
  filter: '/filter',
  httpFilter: '/http-filter',
  blog: {
    list: '/blog',
    page: '/blog/:blogSlug',
    getBlogSlug: (blogSlug: string) => {
      return `/blog/${blogSlug}`
    },
  },
  blogWithServer: {
    list: '/blog-server',
    page: '/blog-server/:blogSlug',
    getBlogSlug: (blogSlug: string) => {
      return `/blog-server/${blogSlug}`
    },
  },
}
