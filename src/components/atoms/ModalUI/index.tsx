import ReactDOM from 'react-dom'
import React from 'react'
import { MdOutlineClose } from 'react-icons/md'

import {
  ModalContent,
  ModalOverlay,
  HeaderModal,
  Modal,
  Icon
} from './modalUI.styles'
import { TextUI } from '../TextUI'
import { ModalUIProps } from './modalUI.interface'

export const ModalUI: React.FC<ModalUIProps> = ({ ...props }) => {
  let portalDiv = document.getElementById('modal-root')!

  return ReactDOM.createPortal(
    <ModalContent>
      <ModalOverlay onClick={props.onClose}>
        <Modal>
          <HeaderModal>
            <TextUI text={props.titleModal} />
            <Icon>
              <MdOutlineClose size={20} color='#ffff' />
            </Icon>
          </HeaderModal>

          {props.children}
        </Modal>
      </ModalOverlay>
    </ModalContent>,
    portalDiv
  )
}
