import React from 'react';
import styled from 'styled-components';
import FormHeading from './_FormHeading.component';
import SubHeading from './_SubHeading.component';

const HeadingContainer = styled.h2`
  font-family: ${(props) => props.theme.fonts.heading.family};
  font-size: ${(props) => props.theme.fonts.heading.size};
  font-weight: ${(props) => props.theme.fonts.heading.weight};

  color: ${(props) => props.theme.colours.defaultFont};

  margin: 0;
`;

export interface HeadingProps {
  children: React.ReactNode;
}

const Heading = ({ children }: HeadingProps) => <HeadingContainer>{children}</HeadingContainer>;

Heading.SubHeading = SubHeading;
Heading.FormHeading = FormHeading;

export default Heading;
