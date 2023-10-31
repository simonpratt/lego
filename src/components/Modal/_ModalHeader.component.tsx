import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import ModalContext from './_Modal.context';

export interface ModalHeaderProps {
  header: string;
  subHeader?: string;
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  padding: 16px;
`;

const HeaderText = styled.div`
  color: ${(props) => props.theme.colours.defaultFont};
  font-family: ${(props) => props.theme.fonts.subHeading.family};
  font-size: ${(props) => props.theme.fonts.subHeading.size};
  font-weight: ${(props) => props.theme.fonts.subHeading.weight};
`;

const SubHeaderText = styled.div`
  margin-top: 4px;

  color: ${(props) => props.theme.colours.defaultFont};
  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
  font-weight: ${(props) => props.theme.fonts.default.weight};
`;

const IconContainer = styled.div`
  padding: 12px;
  padding-right: 16px;
`;

const IconClickableArea = styled.div`
  font-size: 24px;
  font-weight: 400;

  padding: 4px;
  cursor: pointer;

  color: ${(props) => props.theme.colours.secondaryFont};

  &:hover {
    color: ${(props) => props.theme.colours.secondaryFontHover};
  }
`;

const ModalHeader = ({ header, subHeader }: ModalHeaderProps) => {
  const { onClose } = useContext(ModalContext);

  return (
    <HeaderContainer data-testid='modal-header'>
      <TextContainer>
        <HeaderText>{header}</HeaderText>
        {SubHeaderText && <SubHeaderText>{subHeader}</SubHeaderText>}
      </TextContainer>
      <IconContainer>
        <IconClickableArea onClick={onClose} data-testid='button-modal-close'>
          <FontAwesomeIcon icon={faTimes} />
        </IconClickableArea>
      </IconContainer>
    </HeaderContainer>
  );
};

export default ModalHeader;
