import React, { SyntheticEvent } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import responsive from '../../responsive/responsive';
import ModalContext from './_Modal.context';
import ModalBody from './_ModalBody.component';
import ModalHeader from './_ModalHeader.component';

export type ModalSize = 'sm' | 'md' | 'lg';

export interface ModalProps {
  children: React.ReactNode;
  size?: ModalSize;
  onClose: () => void;
}

const getResponsiveSize = (size: ModalSize) => {
  switch (size) {
    case 'sm':
      return 'mobile';
    case 'lg':
      return 'desktop';
    case 'md':
    default:
      return 'tablet';
  }
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: #00000050;
  overflow: auto;
  z-index: 100;
`;

interface ModalWrapperProps {
  size: ModalSize;
}

const ModalWrapper = styled.div<ModalWrapperProps>`
  display: flex;
  justify-content: center;

  z-index: 110;

  ${(props) =>
    responsive.useStylesFor(getResponsiveSize(props.size)).andSmaller(`
    align-items: flex-end;
    min-height: 100%;
  `)}
`;

interface ModalOuterProps {
  size: ModalSize;
}

const ModalOuter = styled.div<ModalOuterProps>`
  background-color: white;
  border-radius: 4px;
  margin: 32px 0 128px 0;
  /* align-self: center; */

  color: ${(props) => props.theme.colours.defaultFont};

  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
  font-weight: ${(props) => props.theme.fonts.default.weight};

  width: ${(props) => responsive.getWidthFor(getResponsiveSize(props.size))};

  ${(props) =>
    responsive.useStylesFor(getResponsiveSize(props.size)).andSmaller(`
    width: 100%;
    margin-bottom: 0;
  `)}
`;

const Modal = ({ children, size, onClose }: ModalProps) => {
  const handleModalClick = (event: SyntheticEvent) => {
    (event as any).modalClicked = true;
  };

  const handleOverlayClick = (event: SyntheticEvent) => {
    if (!(event as any).modalClicked) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalContext.Provider value={{ onClose }}>
        <ModalWrapper size={size || 'md'}>
          <ModalOuter size={size || 'md'} onClick={handleModalClick}>
            {children}
          </ModalOuter>
        </ModalWrapper>
      </ModalContext.Provider>
    </Overlay>,
    document.body,
  );
};

Modal.Body = ModalBody;
Modal.Header = ModalHeader;

export default Modal;
