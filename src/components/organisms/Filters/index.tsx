import styled from 'styled-components'

export interface FiltersProps {
  children: React.ReactNode
}

export const Filter: React.FC<FiltersProps> = ({
  children
}): React.ReactElement => {
  return <FiltersWrapper>{children}</FiltersWrapper>
}

const FiltersWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
