import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
  margin-top: 10px;

  @media ${({ theme }) => theme.device.mobileS} {
    max-width: 320px;
  }
  @media ${({ theme }) => theme.device.mobileM} {
    max-width: 375px;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    max-width: 425px;
  }
  @media ${({ theme }) => theme.device.tabletM} {
    max-width: 800px;
  }
  @media ${({ theme }) => theme.device.laptop} {
    max-width: 1000px;
  }
  @media ${({ theme }) => theme.device.laptopS} {
    max-width: 1100px;
  }
  @media ${({ theme }) => theme.device.laptopM} {
    max-width: 1200px;
  }
  @media ${({ theme }) => theme.device.laptopL} {
    max-width: 1400px;
  }
  @media ${({ theme }) => theme.device.desktop} {
    max-width: 1700px;
  }
  @media ${({ theme }) => theme.device.desktopM} {
    max-width: 1900px;
  }
`
