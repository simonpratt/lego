import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { ColourVariant } from '../../theme/theme.types';
import Button from '../Button/Button.component';
import ActionMenuContext from './ActionMenu.context';
import ActionMenuItem from './_ActionMenuItem.component';
import ActionMenuPanel from './_ActionMenuPanel.component';

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 18px;
`;
export interface ActionMenuProps {
  'children': React.ReactNode;
  'variant'?: ColourVariant;
  'data-cy'?: string;
}

const offsetFn = (): [number, number] => [70, 4];

const ActionMenu = ({ children, variant, 'data-cy': dataCy }: ActionMenuProps) => {
  const [shown, setShown] = useState(false);
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement>();
  const [popperElement, setPopperElement] = useState<HTMLDivElement>();
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: offsetFn,
        },
      },
    ],
  });

  const handleGlobalClick = useCallback(
    (event: MouseEvent) => {
      if (!popperElement?.contains(event.target as any)) {
        setShown(false);
      }
    },
    [setShown, popperElement],
  );

  useEffect(() => {
    document.addEventListener('mouseup', handleGlobalClick);

    return () => {
      document.removeEventListener('mouseup', handleGlobalClick);
    };
  }, [handleGlobalClick, popperElement]);

  return (
    <>
      <Button
        variant={variant}
        data-cy={dataCy || 'action-menu-button'}
        ref={setReferenceElement}
        onClick={() => setShown(true)}
      >
        <StyledIcon icon={faEllipsisV} />
      </Button>

      {shown &&
        ReactDOM.createPortal(
          <div ref={setPopperElement as any} style={styles.popper} {...attributes.popper}>
            <ActionMenuContext.Provider value={{ closeActionMenu: () => setShown(false) }}>
              <ActionMenuPanel>{children}</ActionMenuPanel>
            </ActionMenuContext.Provider>
          </div>,
          document.querySelector('body') as any,
        )}
    </>
  );
};

ActionMenu.Item = ActionMenuItem;

export default ActionMenu;
