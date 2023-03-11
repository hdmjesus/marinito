import { Header } from '@/components/organisms/Header'
import styled, { css } from 'styled-components'

export interface LayoutPageProps {
  children: React.ReactNode
  slug?: boolean
  bgPrimary?: boolean
}

export const LayoutPage: React.FC<LayoutPageProps> = ({
  children,
  slug,
  bgPrimary
}) => {
  return (
    <Wrapper bgPrimary={bgPrimary}>
      {!slug && <Header />}
      <Content slug={slug}>{children}</Content>
    </Wrapper>
  )
}

const Wrapper = styled.section<LayoutPageProps>`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 100vh;
  ${({ bgPrimary }) =>
    bgPrimary &&
    css`
      background: ${({ theme }) => theme.palette.bgLinearPrimary.main};
    `};
`
const Content = styled.main<LayoutPageProps>`
  width: 100%;
  height: 100%;
  min-height: calc(90vh - 190px);
  margin: 0 auto;
  margin: 80px auto;
  margin-bottom: 30px;
  margin: 0 auto;
  margin-top: 20px;
  ${({ slug }) =>
    slug &&
    css`
      margin-top: 0;
    `};
`
