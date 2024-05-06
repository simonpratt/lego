import React, { useMemo } from 'react';
import styled from 'styled-components';
import responsive, { useIsScreenSize } from '../../responsive/responsive';
import MinimalMenuContext from './MinimalMenu.context';

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
  const isMobile = useIsScreenSize('mobile');

  const contextState = useMemo(
    () => ({
      menuExists: true,
      isMobile,
    }),
    [isMobile],
  );

  return (
    <MinimalMenuContext.Provider value={contextState}>
      <MinimalMenuPageContainer hiddenMenu={!!hiddenMenu}>{children}</MinimalMenuPageContainer>
    </MinimalMenuContext.Provider>
  );
};

export default MinimalMenuPage;
