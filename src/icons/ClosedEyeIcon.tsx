import { IconProps } from '@/interfaces/base.interface'

export const ClosedEyeIcon: React.FC<IconProps> = ({
  iconSize = '1em',
  stroke = 'currentColor'
}) => {
  return (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M25.1377 15.9121L28.0002 20.8496'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M19.2754 18.6621L20.1629 23.6996'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.7127 18.6504L11.8252 23.7004'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.8498 15.9121L3.9873 20.8746'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4 13.1123C6.1 15.7123 9.95 18.9998 16 18.9998C22.05 18.9998 25.9 15.7123 28 13.1123'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
