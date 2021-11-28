import styled from 'styled-components';

const SubHeading = styled.h3`
  font-family: ${(props) => props.theme.fonts.subHeading.family};
  font-size: ${(props) => props.theme.fonts.subHeading.size};
  font-weight: ${(props) => props.theme.fonts.subHeading.weight};

  color: ${(props) => props.theme.colours.defaultFont};

  margin: 0;
`;

export default SubHeading;
