import { IconProps } from '@/interfaces/base.interface'

export const MagnifyingGlassIcon: React.FC<IconProps> = ({
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
        d='M14.5 25C20.299 25 25 20.299 25 14.5C25 8.70101 20.299 4 14.5 4C8.70101 4 4 8.70101 4 14.5C4 20.299 8.70101 25 14.5 25Z'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21.9248 21.9248L27.9998 27.9998'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
