import styled from 'styled-components'
export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  height: 70px;
  width: 100%;
  background: ${({ theme }) => theme.palette.bgLinearPrimary.main};
`
export const NavWrapper = styled.nav`
  display: flex;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
`
