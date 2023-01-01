import React from 'react';
import styled from 'styled-components';
import responsive from '../../responsive/responsive';

const MinimalMenuPageContainer = styled.div<{ hiddenMenu: boolean }>`
  ${responsive.useStylesFor('tablet').andLarger(`
    padding-left: 64px;
  `)}

  ${responsive.useStylesFor('mobile').andSmaller(`
    padding-bottom: 64px;
  `)}

  ${(props) =>
    props.hiddenMenu &&
    `
    padding-left: 0 !important;
    padding-bottom: 0 !important;
  `}
`;

export interface MinimalMenuPageProps {
  children: React.ReactNode;
  /** Set the page to be in hidden menu mode.
   * This is useful for rendering your app and preventing re-renders between a un-authenticated no-menu mode and the regular authenticated mode
   **/
  hiddenMenu?: boolean;
}

const MinimalMenuPage = ({ children, hiddenMenu }: MinimalMenuPageProps) => {
  return <MinimalMenuPageContainer hiddenMenu={!!hiddenMenu}>{children}</MinimalMenuPageContainer>;
};

export default MinimalMenuPage;
