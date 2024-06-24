import React from 'react';
import styled from 'styled-components';

const MinimalMenuHeaderContainer = styled.div<{ hiddenMenu: boolean }>``;

const Header = styled.div<{ size: 'sm' | 'md' }>`
  height: ${(props) => (props.size === 'sm' ? '48px' : '64px')};
  background-color: ${(props) => props.theme.colours.cardBackground};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderItem = styled.div`
  padding: 0 16px;
`;

const TitleText = styled.div`
  font-family: ${(props) => props.theme.fonts.subHeading.family};
  font-size: ${(props) => props.theme.fonts.subHeading.size};
  font-weight: ${(props) => props.theme.fonts.subHeading.weight};
  color: ${(props) => props.theme.colours.defaultFont};
`;

export interface MinimalMenuHeaderProps {
  /** Set the page to be in hidden menu mode.
   * This is useful for rendering your app and preventing re-renders between a un-authenticated no-menu mode and the regular authenticated mode
   **/
  hiddenMenu?: boolean;
  /* Optional text to display in the header */
  text?: string;
  /* Optional JSX content to display on the righthand side */
  rightContent?: React.ReactNode;
  /* Menu Size */
  size?: 'sm' | 'md';
}

/**
 * A header that is designed to be nested within the page content.
 * You can use a header per page or simply use a single header for your entire application.
 */
const MinimalMenuHeader = ({ hiddenMenu, text, rightContent, size = 'sm' }: MinimalMenuHeaderProps) => {
  return (
    <MinimalMenuHeaderContainer hiddenMenu={!!hiddenMenu}>
      <Header size={size}>
        <HeaderItem>{text && <TitleText>{text}</TitleText>}</HeaderItem>
        <HeaderItem>{rightContent}</HeaderItem>
      </Header>
    </MinimalMenuHeaderContainer>
  );
};

export default MinimalMenuHeader;
