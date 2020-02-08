import React, { createContext, useContext, useState, useCallback } from 'react';

interface Context {
  state: {
    [key: string]: { open: boolean; data: any };
  };
  actions: {
    openModal(key: string, data?: any): void;
    closeModal(key: string): void;
  };
}

const ModalContext = createContext<Context>({
  state: {},
  actions: {
    openModal: () => void 0,
    closeModal: () => void 0,
  },
});

export function ModalsProvider(props: { children?: React.ReactNode }) {
  const [modalsState, setModalsState] = useState(useContext(ModalContext));

  function openModal(key: string, data?: any) {
    setModalsState({
      ...modalsState,
      state: {
        ...modalsState.state,
        [key]: {
          open: true,
          data,
        },
      },
    });
  }

  function closeModal(key: string) {
    const modal = modalsState.state[key];

    if (modal) {
      setModalsState({
        ...modalsState,
        state: {
          ...modalsState.state,
          [key]: {
            ...modal,
            open: false,
          },
        },
      });

      setTimeout(() => {
        delete modalsState.state[key];
        setModalsState(modalsState);
      }, 300);
    }
  }

  return (
    <ModalContext.Provider
      value={{
        ...modalsState,
        actions: {
          openModal,
          closeModal,
        },
      }}
      {...props}
    />
  );
}

export function useModal(name: string) {
  const modalContext = useContext(ModalContext);

  const open = useCallback(
    (data?: any) => {
      modalContext.actions.openModal(name, data);
    },
    [modalContext.actions, name]
  );

  const close = useCallback(() => {
    modalContext.actions.closeModal(name);
  }, [modalContext.actions, name]);

  const modalState = modalContext.state[name];

  return {
    isOpen: modalState ? modalState.open : false,
    isClosing: modalState && !modalState.open ? true : false,
    data: modalState ? modalState.data : undefined,
    open,
    close,
  };
}
