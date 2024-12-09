class Restaurant {
  infos: string[]
  image: string
  title: string
  rate: string
  description: string
  id: number

  constructor(
    infos: string[],
    image: string,
    title: string,
    rate: string,
    description: string,
    id: number
  ) {
    this.infos = infos
    this.image = image
    this.title = title
    this.rate = rate
    this.description = description
    this.id = id
  }
}

export default Restaurant
