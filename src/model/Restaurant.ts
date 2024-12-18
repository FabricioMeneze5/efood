class Restaurant {
  id: number
  title: string
  highlighted: boolean
  type: string
  rate: number
  description: string
  cover: string
  menu: {
    picture: string
    price: number
    id: number
    name: string
    description: string
    portion: string
  }[]

  constructor(
    id: number,
    title: string,
    highlighted: boolean,
    type: string,
    rate: number,
    description: string,
    cover: string,
    menu: {
      picture: string
      price: number
      id: number
      name: string
      description: string
      portion: string
    }[]
  ) {
    this.id = id
    this.title = title
    this.highlighted = highlighted
    this.type = type
    this.rate = rate
    this.description = description
    this.cover = cover
    this.menu = menu
  }
}

export default Restaurant
