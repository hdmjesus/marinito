import { ModalUI } from '@/components/atoms/ModalUI'
import { CarNotAvailable } from '@/components/organisms/CarNotAvailable'
import { Logo } from '@/icons/Logo'
import NonSSRWrapper from '@/layout/NonSSRWrapper'

export default function Home () {
  return (
    <>
      <Logo iconSize={50} />
      <CarNotAvailable image='/image/carUse.svg' />
      <NonSSRWrapper>
        <ModalUI>ola</ModalUI>
      </NonSSRWrapper>
    </>
  )
}
