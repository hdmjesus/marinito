export const priceTotal = (
  pricePerDay: number | undefined,
  days: number | undefined
) => {
  const totalPrice = pricePerDay * days

  return totalPrice
}
