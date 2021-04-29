import { useRefMounted } from '@hooks/useRefMounted';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  SyntheticEvent,
} from 'react';
import { HOVERABLE_POPOVER_ID } from './HoverablePopover';

interface IPopoverContext {
  popoverOpened: boolean;
  popoverAnchor: HTMLElement | null;
  handlePopoverOpen(e: SyntheticEvent<HTMLElement>): void;
  handlePopoverClose(): void;
  handleAddContent(e: JSX.Element | null): void;
  popoverContent: JSX.Element | null;
}

export const PopoverContext = createContext<IPopoverContext>({
  popoverOpened: false,
  popoverAnchor: null,
  handlePopoverOpen() {},
  handlePopoverClose() {},
  handleAddContent() {},
  popoverContent: null,
});

const usePopover = () => {
  const [popoverAnchor, setAnchor] = useState<HTMLElement | null>(null);
  const [openedPopover, setOpenedPopover] = useState(false);
  const [content, setContent] = useState<JSX.Element | null>(null);
  const isMounted = useRefMounted();

  const handlePopoverOpen = useCallback(
    ({ currentTarget }: SyntheticEvent<HTMLElement>) => {
      if (currentTarget.dataset.anchorId === HOVERABLE_POPOVER_ID) return;
      setAnchor(currentTarget);
      setOpenedPopover(true);
    },
    []
  );

  const handleAddContent = useCallback((content: JSX.Element | null) => {
    setContent(content);
  }, []);

  function closePopover() {
    if (isMounted.current) {
      setOpenedPopover(false);
      setAnchor(null);
    }
  }

  const handlePopoverClose = useCallback(() => {
    closePopover();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', closePopover, true);
    return () => {
      window.removeEventListener('scroll', closePopover);
    };
  }, []);

  return {
    PopoverContext: PopoverContext.Provider,
    popoverOpened: openedPopover,
    handlePopoverOpen,
    handlePopoverClose,
    handleAddContent,
    popoverAnchor,
    popoverContent: content,
  };
};

export const usePopoverContext = () => useContext(PopoverContext);

export default usePopover;
