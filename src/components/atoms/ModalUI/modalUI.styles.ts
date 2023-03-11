import styled from 'styled-components'

export const ModalContent = styled.div``
export const ModalOverlay = styled.div`
  top: 0;
  left: 0;
  z-index: 13000;
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`
export const Modal = styled.div`
  background: ${({ theme }) => theme.palette.bgLinearPrimary.main};
  height: 70vh;
  width: 100vw;
  border-radius: 20px 20px 0 0;
  padding: 20px;
  position: absolute;
  bottom: 0;
`
export const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Icon = styled.div`
  cursor: pointer;
`
