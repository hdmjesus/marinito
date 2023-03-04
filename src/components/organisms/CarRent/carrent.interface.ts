import { statusCar } from '@/interfaces/carRent.interface'

export interface CarRentProps {
  image?: string
  name?: string
  year?: string
  price?: number
  daysRent?: number
  variant?: statusCar
  dateDelivery?: string
  timeDelivery?: string
}
