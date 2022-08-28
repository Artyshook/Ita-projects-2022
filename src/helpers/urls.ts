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
  blogPage: '/blog/:blogSlug',
}

export const blogIdUrl = (blogId: string) => {
  return `/blog/${blogId}`
}
