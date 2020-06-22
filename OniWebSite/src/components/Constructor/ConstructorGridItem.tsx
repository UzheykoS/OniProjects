import React, { useState, useRef } from 'react';
import { ConstructoreMode } from './Constructor';
import {
  ConstructorGridItemWrapper,
  RemoveIconWrapper,
  ImageWrapper,
  TooltipTitle,
  useStyles,
} from './styled';
import colors from '@constants/colors';
import RemoveIcon from '@material-ui/icons/Remove';
import { IProduct } from '@constants/products';
import {
  useMediaQuery,
  Popper,
  ClickAwayListener,
  Paper,
  IconButton,
} from '@material-ui/core';
import { BREAKPOINT } from '@constants';
import Zoom from '@material-ui/core/Zoom';
import { TooltipStyled } from '@common/Tooltip/styled';
import { Button } from '@common/Button';
import { Flex } from '@styles/styled';
import CloseIcon from '@material-ui/icons/Close';

interface IConstructorGridItemProps {
  item?: IProduct;
  mode: ConstructoreMode;
  index: number;
  isActive: boolean;
  onClick: (index: number) => void;
  removeItem: (index: number) => void;
}

export function ConstructorGridItem({
  item,
  onClick,
  mode,
  index,
  isActive,
  removeItem,
}: IConstructorGridItemProps) {
  const [mouseOver, setMouseOver] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);
  const anchorRef = useRef<HTMLDivElement>(null);
  const classes = useStyles();

  const onMouseOver = () => {
    setMouseOver(true);
  };

  const onMouseOut = () => {
    setMouseOver(false);
  };

  if (isMobile) {
    return (
      <ConstructorGridItemWrapper
        onClick={() => onClick(index)}
        size={
          mode === ConstructoreMode.MacaronLarge ||
          mode === ConstructoreMode.ZephyrMedium
            ? 'small'
            : mode === ConstructoreMode.ChouxSmall ||
              mode === ConstructoreMode.ChouxMedium ||
              mode === ConstructoreMode.ZephyrSmall
            ? 'large'
            : 'medium'
        }
        removeEnabled={!!item}
      >
        {item && (
          <>
            <div ref={anchorRef}>
              <ImageWrapper style={{ height: '100%' }} src={item.imageUrl} />
            </div>
            <Popper
              open={isActive}
              anchorEl={anchorRef.current}
              transition
              style={{ zIndex: 1500 }}
            >
              {({ TransitionProps, placement }) => (
                <Zoom
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom' ? 'center top' : 'center bottom',
                  }}
                >
                  <Paper style={{ padding: 10, width: 250 }}>
                    <ClickAwayListener onClickAway={() => {}}>
                      <Flex
                        direction={'column'}
                        style={{ textAlign: 'center' }}
                      >
                        <Flex flexEnd>
                          <IconButton
                            className={classes.closeIconWrapper}
                            onClick={() => onClick(index)}
                          >
                            <CloseIcon />
                          </IconButton>
                        </Flex>
                        <TooltipTitle>{item.id}</TooltipTitle>
                        <Flex justifyCenter>
                          <Button
                            rounded
                            color={'secondary'}
                            onClick={() => removeItem(index)}
                          >
                            Убрать из набора
                          </Button>
                        </Flex>
                      </Flex>
                    </ClickAwayListener>
                  </Paper>
                </Zoom>
              )}
            </Popper>
          </>
        )}
      </ConstructorGridItemWrapper>
    );
  }
  return (
    <ConstructorGridItemWrapper
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={() => onClick(index)}
      size={
        mode === ConstructoreMode.MacaronLarge ||
        mode === ConstructoreMode.ZephyrMedium
          ? 'small'
          : mode === ConstructoreMode.ChouxSmall ||
            mode === ConstructoreMode.ChouxMedium ||
            mode === ConstructoreMode.ZephyrSmall
          ? 'large'
          : 'medium'
      }
      removeEnabled={!!item}
    >
      {item && (
        <TooltipStyled
          TransitionComponent={Zoom}
          title={item.id}
          arrow
          placement={'top'}
          open={isActive}
        >
          <div>
            <RemoveIconWrapper
              visible={mouseOver}
              small={
                mode === ConstructoreMode.MacaronLarge ||
                mode === ConstructoreMode.ZephyrMedium
              }
            >
              <RemoveIcon
                style={{
                  fontSize: 40,
                  color: colors.primary.white,
                }}
              />
            </RemoveIconWrapper>

            <ImageWrapper style={{ height: '100%' }} src={item.imageUrl} />
          </div>
        </TooltipStyled>
      )}
    </ConstructorGridItemWrapper>
  );
}
