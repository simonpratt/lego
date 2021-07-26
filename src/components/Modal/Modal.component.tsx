import React, { SyntheticEvent } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import { Loader } from '../..';
import responsive from '../../responsive/responsive';
import ModalContext from './_Modal.context';
import ModalBody from './_ModalBody.component';
import ModalHeader from './_ModalHeader.component';

export type ModalSize = 'sm' | 'md' | 'lg';

export interface ModalProps {
  children: React.ReactNode;
  size?: ModalSize;
  loading?: boolean;
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

const animationDistance = 30;
const bottomPadding = 50;
const loadingHeight = 64;

const Overlay = styled(motion.div)`
  position: fixed;
  top: -${animationDistance}px;
  left: 0;
  width: 100%;
  height: calc(100% + ${animationDistance}px + ${bottomPadding}px);

  padding-top: ${animationDistance}px;
  padding-bottom: ${bottomPadding}px;

  background-color: #00000050;
  z-index: 100;
`;

const ScrollContainer = styled.div`
  overflow: auto;
  height: 100%;
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

const ModalOuter = styled(motion.div)<ModalOuterProps>`
  background-color: white;
  border-radius: 4px;
  margin: 32px 0 128px 0;

  color: ${(props) => props.theme.colours.defaultFont};

  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
  font-weight: ${(props) => props.theme.fonts.default.weight};

  width: ${(props) => responsive.getWidthFor(getResponsiveSize(props.size))};
  overflow: hidden;

  ${(props) =>
    responsive.useStylesFor(getResponsiveSize(props.size)).andSmaller(`
    width: 100%;
    margin-bottom: 0;
  `)}
`;

const SpinnerContainer = styled.div`
  display: flex;
  height: ${loadingHeight}px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Modal = ({ children, size, loading, onClose }: ModalProps) => {
  const handleModalClick = (event: SyntheticEvent) => {
    (event as any).modalClicked = true;
  };

  const handleOverlayClick = (event: SyntheticEvent) => {
    if (!(event as any).modalClicked) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <AnimatePresence>
      <Overlay
        key={'modal'}
        initial={{ opacity: 0, y: animationDistance }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: animationDistance }}
        transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
        onClick={handleOverlayClick}
      >
        <ScrollContainer>
          <ModalContext.Provider value={{ onClose }}>
            <ModalWrapper size={size || 'md'}>
              <ModalOuter
                transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
                initial={{ height: loading ? loadingHeight : 'auto' }}
                animate={{ height: loading ? loadingHeight : 'auto' }}
                size={size || 'md'}
                onClick={handleModalClick}
              >
                {!loading && children}
                {loading && <SpinnerContainer><Loader /></SpinnerContainer>}
              </ModalOuter>
            </ModalWrapper>
          </ModalContext.Provider>
        </ScrollContainer>
      </Overlay>
    </AnimatePresence>,
    document.body,
  );
};

Modal.Body = ModalBody;
Modal.Header = ModalHeader;

export default Modal;
