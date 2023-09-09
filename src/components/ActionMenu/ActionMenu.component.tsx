import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { ColourVariant } from '../../theme/theme.types';
import Button, { ButtonSize } from '../Button/Button.component';
import ActionMenuContext from './ActionMenu.context';
import ActionMenuCheckbox from './_ActionMenuCheckbox.component';
import ActionMenuItem from './_ActionMenuItem.component';
import ActionMenuPanel from './_ActionMenuPanel.component';

export interface ActionMenuProps {
  'children': React.ReactNode;
  'variant'?: ColourVariant;
  'size'?: ButtonSize;
  'icon'?: IconProp;
  'text'?: string;
  'data-cy'?: string;
}

const offsetFn = (): [number, number] => [70, 4];

const ActionMenu = ({ children, variant, size, icon, text, 'data-cy': dataCy }: ActionMenuProps) => {
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
        size={size}
        icon={icon || faEllipsisV}
        data-cy={dataCy || 'action-menu-button'}
        ref={setReferenceElement}
        onClick={() => setShown(true)}
      >
        {text}
      </Button>

      {shown &&
        ReactDOM.createPortal(
          <div ref={setPopperElement as any} style={{ ...styles.popper, zIndex: 999 }} {...attributes.popper}>
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
