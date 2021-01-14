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
import CloseIcon from '@material-ui/icons/Close';
import { Flex } from '@styles/styled';

interface IConstructorGridItemProps {
  item?: IProduct;
  mode: ConstructoreMode;
  index: number;
  isActive: boolean;
  onClick: (index?: number) => void;
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

  const getPlaceholder = () => {
    switch (mode) {
      case ConstructoreMode.MacaronSmall:
      case ConstructoreMode.MacaronMedium:
      case ConstructoreMode.MacaronLarge:
        return 'images/pages/macarons/macaron_empty';
      case ConstructoreMode.ZephyrSmall:
      case ConstructoreMode.ZephyrMedium:
        return 'images/pages/zephyr/zephyr_empty';
      case ConstructoreMode.ChouxSmall:
      case ConstructoreMode.ChouxMedium:
        return 'images/pages/choux/choux_empty';
      default:
        return '';
    }
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
        {item ? (
          <>
            <div ref={anchorRef}>
              <RemoveIconWrapper
                visible={isActive}
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
                    <ClickAwayListener onClickAway={() => onClick()}>
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
                            style={{
                              border: `1px solid ${colors.primary.gold}`,
                            }}
                            color={'secondary'}
                            onClick={() => removeItem(index)}
                          >
                            Удалить из набора
                          </Button>
                        </Flex>
                      </Flex>
                    </ClickAwayListener>
                  </Paper>
                </Zoom>
              )}
            </Popper>
          </>
        ) : (
          <>
            <div ref={anchorRef}></div>
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
                  <Paper style={{ padding: '0 5px' }}>
                    <ImageWrapper
                      style={{ height: '100%' }}
                      src={getPlaceholder()}
                    >
                      <ClickAwayListener onClickAway={() => onClick()}>
                        <TooltipTitle>{'Тут пока ничего нет'}</TooltipTitle>
                      </ClickAwayListener>
                    </ImageWrapper>
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
      {item ? (
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

            <ImageWrapper
              style={{ height: '100%', background: colors.primary.white }}
              src={item.imageUrl}
            />
          </div>
        </TooltipStyled>
      ) : (
        <TooltipStyled
          TransitionComponent={Zoom}
          title={'Тут пока ничего нет'}
          arrow
          placement={'bottom'}
        >
          <div>
            <ImageWrapper
              style={{ height: '100%', background: '#F5F5F5', opacity: 0.5 }}
              src={getPlaceholder()}
            />
          </div>
        </TooltipStyled>
      )}
    </ConstructorGridItemWrapper>
  );
}
