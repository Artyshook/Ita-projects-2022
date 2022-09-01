export const filterByName = (id: string) => {
  return `${process.env.REACT_APP_URL}?search=${name}`
}

export const addPost = (data: DataType[]) => {
  return `${process.env.REACT_APP_URL_POST_ARTICLE}`
}

type DataType = {
  title: string
  post: string
  category: string
  cover: string
}
