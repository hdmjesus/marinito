import React from 'react'

import { InputUI } from '@/components/atoms/InputUI'
import { EmailISymbolIcon } from '@/icons/EmailISymbolIcon'

export interface FormRecoveryProps {}

export const FormRecovery: React.FC<FormRecoveryProps> =
  (): React.ReactElement => {
    return (
      <>
        <InputUI
          hiddenLabel
          size='medium'
          label='Correo'
          placeholder='Correo'
          type='email'
          border
          fullWidth
          name='email'
          LabelfontSize={{ xs: 13 }}
          iconStart={<EmailISymbolIcon />}
        />
      </>
    )
  }
