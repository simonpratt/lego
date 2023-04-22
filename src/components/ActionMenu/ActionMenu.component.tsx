import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { ColourVariant } from '../../theme/theme.types';
import Button from '../Button/Button.component';
import ActionMenuContext from './ActionMenu.context';
import ActionMenuCheckbox from './_ActionMenuCheckbox.component';
import ActionMenuItem from './_ActionMenuItem.component';
import ActionMenuPanel from './_ActionMenuPanel.component';

const IconWrapper = styled.div`
  width: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 18px;
`;
export interface ActionMenuProps {
  'children': React.ReactNode;
  'variant'?: ColourVariant;
  'icon'?: IconProp;
  'data-cy'?: string;
}

const offsetFn = (): [number, number] => [70, 4];

const ActionMenu = ({ children, variant, icon, 'data-cy': dataCy }: ActionMenuProps) => {
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
        <IconWrapper>
          <StyledIcon icon={icon || faEllipsisV} />
        </IconWrapper>
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
ActionMenu.Checkbox = ActionMenuCheckbox;

export default ActionMenu;
