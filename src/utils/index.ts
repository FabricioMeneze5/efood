export const priceBRL = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const getTotalPrice = (items: MenuItem[]) => {
  return items.reduce((total, currentItem) => {
    if (currentItem.preco) {
      return (total += currentItem.preco)
    }
    return 0
  }, 0)
}
