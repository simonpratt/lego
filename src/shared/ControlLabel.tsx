import styled from 'styled-components';
import getThemeControlColours from '../theme/helpers/getThemeControlColours';

const ControlLabel = styled.label`
  display: block;
  padding-bottom: 8px;

  color: ${(props) => getThemeControlColours(props.theme).font};
  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
`;

export default ControlLabel;
