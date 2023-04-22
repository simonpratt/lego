import styled from 'styled-components';

interface CheckmarkProps {
  checked: boolean;
  large: boolean;
}

export const Checkmark = styled.div<CheckmarkProps>`
  position: relative;
  height: ${(props) => (props.large ? '36px' : '24px')};
  width: ${(props) => (props.large ? '36px' : '24px')};
  background-color: ${(props) => props.theme.colours.controlBackground};

  &:after {
    content: '';
    position: absolute;
    display: ${(props) => (props.checked ? 'block' : 'none')};

    left: ${(props) => (props.large ? '14px' : '9px')};
    top: ${(props) => (props.large ? '7px' : '5px')};
    width: ${(props) => (props.large ? '7px' : '5px')};
    height: ${(props) => (props.large ? '16px' : '10px')};
    border: solid ${(props) => props.theme.colours.defaultFont};
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
