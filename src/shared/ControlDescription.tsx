import styled from 'styled-components';

const ControlDescription = styled.div`
  color: ${(props) => props.theme.colours.controlDescriptionColour};
  font-family: ${(props) => props.theme.fonts.emphasis.family};
  font-size: ${(props) => props.theme.fonts.emphasis.size};
  font-weight: ${(props) => props.theme.fonts.emphasis.weight};
  line-height: 18px;

  padding-top: 4px;
  padding-bottom: 6px;
  font-style: italic;
`;

export default ControlDescription;
