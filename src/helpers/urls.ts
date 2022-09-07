export const urls = {
  home: '/',
  web: '/web',
  counter: '/counter',
  todolist: '/todolist',
  hackerTyper: '/hacker-typer',
  memoryGame: '/memory-game',
  calculator: '/calculator',
  filter: '/filter',
  newPost: '/blog/new-article',
  httpFilter: '/http-filter',
  blog: '/blog',
  blogWithServer: {
    blogList: '/blog/list',
    blogPage: '/blog/:blogSlug',
  },
}

export const blogIdUrl = (blogSlug: string) => {
  return `/blog/${blogSlug}`
}
