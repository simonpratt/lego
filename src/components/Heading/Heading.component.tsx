import React from 'react';
import styled from 'styled-components';

const HeadingContainer = styled.h2`
  font-family: ${(props) => props.theme.fonts.heading.family};
  font-size: ${(props) => props.theme.fonts.heading.size};
  font-weight: ${(props) => props.theme.fonts.heading.weight};

  color: ${(props) => props.theme.colours.defaultFont};
`;

export interface HeadingProps {
  children: React.ReactNode;
}

const Heading = ({ children }: HeadingProps) => <HeadingContainer>{children}</HeadingContainer>;

export default Heading;
