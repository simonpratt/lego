import React, { createContext, useCallback, useRef } from 'react';

export interface FocusContextProps {
  getFocused: () => string | undefined;
  requestFocus: (id: string) => void;
  onFocus: (id: string) => void;
  onBlur: (id: string) => void;
  registerFocusable: (id: string, focus: () => void) => void;
  deregisterFocusable: (id: string) => void;
}

const FocusContext = createContext<FocusContextProps>({
  // eslint-disable-next-line
  getFocused: () => undefined,
  // eslint-disable-next-line
  requestFocus: (id: string) => {},
  // eslint-disable-next-line
  onFocus: (id: string) => {},
  // eslint-disable-next-line
  onBlur: (id: string) => {},
  // eslint-disable-next-line
  registerFocusable: (id: string, focus: () => void) => {},
  // eslint-disable-next-line
  deregisterFocusable: (id: string) => {},
});

type SubscriberMap = Record<string, () => void>;

export interface FocusContextProviderProps {
  children: React.ReactNode;
}

const FocusContextProvider = ({ children }: FocusContextProviderProps) => {
  const focusRef = useRef<string>();
  const focusRequest = useRef<string>();
  const subscribersRef = useRef<SubscriberMap>({});

  const getFocused = () => {
    return focusRef.current || undefined;
  };

  const requestFocus = useCallback((id: string) => {
    const subscribers = subscribersRef.current;
    const matchingSubscriber = subscribers[id];

    focusRequest.current = id;
    if (matchingSubscriber) {
      matchingSubscriber();
    }
  }, []);

  const onFocus = (id: string) => {
    focusRef.current = id;
  };

  const onBlur = useCallback((id: string) => {
    if (focusRef.current === id) {
      focusRef.current = undefined;
    }
  }, []);

  const registerFocusable = useCallback((id: string, focus: () => void) => {
    subscribersRef.current[id] = focus;

    if (focusRequest.current === id) {
      focus();
    }
  }, []);

  const deregisterFocusable = useCallback((id: string) => {
    delete subscribersRef.current[id];
  }, []);

  return (
    <FocusContext.Provider
      value={{
        getFocused,
        requestFocus,
        onFocus,
        onBlur,
        registerFocusable,
        deregisterFocusable,
      }}
    >
      {children}
    </FocusContext.Provider>
  );
};

function FocusContextProviderHOC(WrappedComponent: any) {
  const HocComponent = (props: any) => {
    return (
      <FocusContextProvider>
        <WrappedComponent {...props} />
      </FocusContextProvider>
    );
  };

  return HocComponent;
}

export { FocusContext, FocusContextProvider, FocusContextProviderHOC };
