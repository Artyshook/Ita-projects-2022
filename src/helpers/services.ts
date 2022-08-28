export const filterByName = (name: string) => {
  return `${process.env.REACT_APP_URL}?search=${name}`
}
