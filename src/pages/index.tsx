import { CarNotAvailable } from '@/components/organisms/CarNotAvailable'
import { Logo } from '@/icons/Logo'

export default function Home () {
  return (
    <>
      <Logo iconSize={50} />
      <CarNotAvailable image='/image/carUse.svg' />
    </>
  )
}
