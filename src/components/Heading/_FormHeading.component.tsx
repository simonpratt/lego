import styled from 'styled-components';
import getThemeControlColours from '../../theme/helpers/getThemeControlColours';

const FormHeading = styled.h3`
  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
  font-weight: ${(props) => props.theme.fonts.default.weight};

  color: ${(props) => props.theme.colours.defaultFont};

  margin: 0;

  border-left: 4px solid ${(props) => getThemeControlColours(props.theme).background};
  line-height: 48px;
  padding-left: 16px;
`;

export default FormHeading;
