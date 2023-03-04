import { CarAvailable } from '@/components/molecules/CarAvailable'
import { CarFeatures } from '@/components/molecules/CarFeatures'
import { Meta, Story } from '@storybook/react'

import { CarNameDate, CarNameDateProps } from '.'

const meta: Meta = {
  title: 'Organisms/CarNameDate',
  args: {}
}

export default meta

const Template: Story<CarNameDateProps> = args => <CarNameDate {...args} />

export const CarNameDateDefault = Template.bind({})

CarNameDateDefault.args = {
  children: (
    <>
      <CarAvailable modelCar='Honda CRV' yearCar='2020' available={false} />
      <CarFeatures column={2} />
    </>
  )
}
