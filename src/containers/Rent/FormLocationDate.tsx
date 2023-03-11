import { FormDateReservation } from '@/components/organisms/FormDateReservation'
import { FormLocationReservation } from '@/components/organisms/FormLocationReservation'

import React from 'react'

interface FormLocationDateProps {
  formType: string
}
export const FormLocationDate: React.FC<FormLocationDateProps> = ({
  ...props
}) => {
  return (
    <>
      {props.formType == 'location' ? (
        <FormLocationReservation />
      ) : (
        <FormDateReservation />
      )}
    </>
  )
}
