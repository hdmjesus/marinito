import { IconProps } from '@/interfaces/base.interface'
import styled from 'styled-components'

export const Logo: React.FC<IconProps> = ({ iconSize, stroke }) => (
  <WrapperIcon>
    <svg
      width={iconSize}
      height={iconSize}
      viewBox='0 0 1024 1024'
      className='icon'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M766.976 508.736c80.576 0 152.448 32.128 199.232 82.176'
        fill='#AEBCC3'
      />
      <path
        d='M64.704 684.992c10.816 19.2 32.064 32.192 56.576 32.192h784.64c35.84 0 64.832-27.648 64.832-61.76v-17.408h-36.608a15.744 15.744 0 0 1-16.064-15.296v-71.808a277.568 277.568 0 0 0-150.144-44.16h1.6l-55.04-.256c-53.632-115.2-157.504-210.752-294.208-210.752-136.512 0-251.008 89.728-282.176 210.688H121.28c-35.456 0-56.128 27.392-56.128 61.184'
        fill='#E8447A'
      />
      <path
        d='M64.704 654.464h13.76a39.168 39.168 0 0 0 40.064-38.272v-17.6c0-21.12-17.92-38.208-40.064-38.208H65.088'
        fill='#F5BB1D'
      />
      <path
        d='M160 684.992a101.632 96.832 0 1 0 203.264 0 101.632 96.832 0 1 0-203.264 0Z'
        fill='#455963'
      />
      <path
        d='M218.88 684.992a42.752 40.768 0 1 0 85.504 0 42.752 40.768 0 1 0-85.504 0Z'
        fill='#AEBCC3'
      />
      <path
        d='M652.032 684.992a101.568 96.832 0 1 0 203.136 0 101.568 96.832 0 1 0-203.136 0Z'
        fill='#455963'
      />
      <path
        d='M710.912 684.992a42.752 40.768 0 1 0 85.504 0 42.752 40.768 0 1 0-85.504 0Z'
        fill='#AEBCC3'
      />
      <path
        d='M966.272 591.104v-.192a257.92 257.92 0 0 0-48.192-40v71.808c0 8.448 7.232 15.296 16.064 15.296h36.608v-42.304l-4.48-4.608z'
        fill='#F5BB1D'
      />
      <path
        d='M405.568 335.616c-104.896 6.336-191.296 76.8-216.64 170.816h216.64V335.616zm40.128 170.816h216.64c-41.216-86.848-117.12-159.616-216.64-170.048v170.048z'
        fill='#631536'
      />
    </svg>
    {stroke && <NameIcon stroke={stroke}>Marinito Renta Car</NameIcon>}
  </WrapperIcon>
)

const WrapperIcon = styled.div`
  svg {
    margin: 0;
    padding: 0;
  }
`

const NameIcon = styled.p<Pick<IconProps, 'stroke'>>`
  font-weight: 700;
  color: ${({ stroke }) => stroke};
  margin-top: -10px;
`
