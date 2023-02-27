export const priceTotal = (pricePerDay: number, days: number) => {
  const totalPrice = pricePerDay * days

  return totalPrice
}
