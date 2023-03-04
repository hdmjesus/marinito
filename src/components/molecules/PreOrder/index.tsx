import React from 'react'
import styled from 'styled-components'

import { TextUI } from '@/components/atoms/TextUI'
import { CardUI } from '@/components/atoms/CardUI'
import { ButtonUI } from '@/components/atoms/ButtonUI'
import { ParagraphUI } from '@/components/atoms/ParagraphUI'

export interface PreOrderProps {
  totalPrice: number
  totalDays: number
}
export const PreOrder: React.FC<PreOrderProps> = () => {
  return (
    <OrderWrapper>
      <CardUI shape='rounded' padding='medium'>
        <TextUI
          text='Detalles de la orden'
          fontSize={{ xs: 18 }}
          fontWeight={700}
          sx={{ marginBottom: '20px' }}
          $color={theme => theme.palette.common.black}
        />

        <TextUI
          tag='p'
          text='Pago al recoger el auto'
          fontSize={{ xs: 14 }}
          $color={theme => theme.palette.common.black}
        />
        <ParagraphUI sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>
            <TextUI
              tag='span'
              text='Renta del auto x '
              fontSize={{ xs: 14 }}
              $color={theme => theme.palette.common.black}
            />
            <TextUI
              tag='span'
              text='3 dias'
              fontSize={{ xs: 14 }}
              $color={theme => theme.palette.common.black}
            />
            <TextUI
              tag='p'
              text='$ 20.00 por dia'
              fontSize={{ xs: 12 }}
              $color={theme => theme.palette.common.black}
            />
          </p>
          <TextUI
            tag='span'
            text='$ 60.00'
            fontSize={{ xs: 14 }}
            $color={theme => theme.palette.common.black}
          />
        </ParagraphUI>

        <ParagraphUI
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px '
          }}
        >
          <TextUI
            tag='span'
            text='Pago ahora'
            fontSize={{ xs: 14 }}
            $color={theme => theme.palette.common.black}
          />

          <TextUI
            tag='span'
            text='$ 0.00'
            fontSize={{ xs: 14 }}
            $color={theme => theme.palette.common.black}
          />
        </ParagraphUI>
        <TextUI
          tag='p'
          text='Pago al recoger el auto'
          fontSize={{ xs: 14 }}
          $color={theme => theme.palette.common.black}
        />

        <ParagraphUI
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '10px',
            marginBottom: '20px'
          }}
        >
          <TextUI
            tag='span'
            text='Total'
            fontWeight={700}
            fontSize={{ xs: 17 }}
            $color={theme => theme.palette.primary.main}
          />

          <TextUI
            tag='span'
            text='$ 60.00'
            fontSize={{ xs: 17 }}
            fontWeight={700}
            $color={theme => theme.palette.primary.main}
          />
        </ParagraphUI>
        <ButtonUI
          label='Reservar'
          shape='pill'
          fullWidth
          bgLinear='bgLinearPrimary'
        />
      </CardUI>
    </OrderWrapper>
  )
}

const OrderWrapper = styled.div`
  width: 100%;
  max-width: 300px;
`
