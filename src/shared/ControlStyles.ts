import { css } from 'styled-components';
import getThemeControlColours from '../theme/helpers/getThemeControlColours';

export const CONTROL_HEIGHT = 48;

export const ControlStyles = css`
  outline: none;
  box-shadow: none;

  width: 100%;
  height: ${CONTROL_HEIGHT}px;
  padding: 0 12px;
  scroll-margin-bottom: 100px;

  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};

  color: ${(props) => getThemeControlColours(props.theme).font};
  background-color: ${(props) => getThemeControlColours(props.theme).background};

  border: 1px solid ${(props) => getThemeControlColours(props.theme).background};
  border-radius: 2px;

  &:hover {
    border: 1px solid ${(props) => getThemeControlColours(props.theme).borderHover};
  }

  &:focus {
    border: 1px solid ${(props) => getThemeControlColours(props.theme).borderFocus};
  }

  &::placeholder {
    color: ${(props) => getThemeControlColours(props.theme).placeholder};
  }

  &:disabled {
    color: ${(props) => getThemeControlColours(props.theme).font};
    opacity: 1;
    -webkit-text-fill-color: ${(props) => getThemeControlColours(props.theme).font};
    background-color: ${(props) => props.theme.colours.controlBackgroundDisabled};
    border: none;
  }
`;
