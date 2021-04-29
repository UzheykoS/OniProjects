import React, { FC } from 'react';

import { StyledHoverablePopover } from './styled';

interface IHoverablePopover {
  popoverAnchor: any;
  popoverOpened: boolean;
  handlePopoverOpen(anchor: any): void;
  handlePopoverClose(): void;
  content: JSX.Element | null;
}

export const HOVERABLE_POPOVER_ID = 'hoverable-popover';

const HoverablePopover: FC<IHoverablePopover> = ({
  popoverAnchor,
  popoverOpened,
  content,
}) => {
  return (
    <StyledHoverablePopover
      id={HOVERABLE_POPOVER_ID}
      open={popoverOpened}
      anchorEl={popoverAnchor}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      {content}
    </StyledHoverablePopover>
  );
};

export default HoverablePopover;
