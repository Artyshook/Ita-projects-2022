export const coverArr: { [index: string]: string } = {
  travel:
    'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  nature:
    'https://images.pexels.com/photos/7219549/pexels-photo-7219549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  art: 'https:/images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  vacation:
    'https://images.pexels.com/photos/10072847/pexels-photo-10072847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  coding:
    'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  design:
    'https://images.pexels.com/photos/5696210/pexels-photo-5696210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  home: 'https://images.pexels.com/photos/5824877/pexels-photo-5824877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  sky: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  abstract:
    'https://images.pexels.com/photos/5186869/pexels-photo-5186869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  background:
    'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
}

export const options2 = [
  { value: 'travel', label: 'travel' },
  { value: 'nature', label: 'nature' },
  { value: 'art', label: 'art' },
  { value: 'vacation', label: 'vacation' },
  { value: 'coding', label: 'coding' },
  { value: 'design', label: 'design' },
  { value: 'home', label: 'home' },
  { value: 'abstract', label: 'abstract' },
  { value: 'sky', label: 'sky' },
  { value: 'background', label: 'background' },
]

export const options = Object.keys(coverArr).map(key => ({
  value: key,
  label: key,
}))

export const avatar =
  'https://media.istockphoto.com/vectors/woman-with-laptop-sitting-in-nature-and-leaves-concept-illustration-vector-id1139913278?k=20&m=1139913278&s=612x612&w=0&h=Ue0Nh74fYCnNd5hfwBCLwJ2VeZqjXxnI5iEXqqTLXb8='
