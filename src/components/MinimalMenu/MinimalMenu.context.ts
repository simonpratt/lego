import React from 'react';

interface MinimalMenuContextProps {
  menuExists: boolean;
  isMobile: boolean;
}

const MinimalMenuContext = React.createContext<MinimalMenuContextProps>({
  menuExists: false,
  isMobile: false,
});

export default MinimalMenuContext;
