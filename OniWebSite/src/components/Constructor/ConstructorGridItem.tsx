import React, {
  memo,
  SyntheticEvent,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { ConstructoreMode } from './Constructor';
import {
  ConstructorGridItemWrapper,
  RemoveIconWrapper,
  ImageWrapper,
} from './styled';
import colors from '@constants/colors';
import RemoveIcon from '@material-ui/icons/Remove';
import { IProduct } from '@constants/products';
import { Typography, useMediaQuery } from '@material-ui/core';
import { BREAKPOINT } from '@constants';
import Zoom from '@material-ui/core/Zoom';
import { TooltipStyled } from '@common/Tooltip/styled';
import { usePopoverContext } from './usePopover';

interface IConstructorGridItemProps {
  item?: IProduct;
  mode: ConstructoreMode;
  index: number;
  isActive: boolean;
  onClick: (index?: number) => void;
}

function ConstructorGridItem({
  item,
  onClick,
  mode,
  index,
  isActive,
}: IConstructorGridItemProps) {
  const [mouseOver, setMouseOver] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);

  const onMouseOver = useCallback(() => {
    setMouseOver(true);
  }, []);

  const onMouseOut = useCallback(() => {
    setMouseOver(false);
  }, []);

  const placeholder = useMemo(() => {
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
      case ConstructoreMode.ChouxLarge:
        return 'images/pages/choux/choux_empty';
      default:
        return '';
    }
  }, [mode]);

  const {
    handlePopoverOpen,
    handlePopoverClose,
    handleAddContent,
  } = usePopoverContext();

  const mobilePopoverContent = useMemo(
    () => (
      <Typography
        style={{
          backgroundColor: colors.primary.white,
          color: colors.primary.black,
          fontSize: 12,
        }}
      >
        {item ? item.id : 'Тут пока ничего нет'}
      </Typography>
    ),
    [item]
  );

  const openPopover = useCallback(
    (event: SyntheticEvent<any>) => {
      handleAddContent(mobilePopoverContent);
      handlePopoverOpen(event);
    },
    [mobilePopoverContent]
  );

  const handleMobilePopoverOpen = useCallback(
    (ev: SyntheticEvent<any>) => {
      openPopover(ev);
      onClick(index);
    },
    [index, isActive, onClick]
  );

  const handleMobilePopoverClose = useCallback(() => {
    handlePopoverClose();
    onClick();
  }, [isActive, onClick]);

  const handleRemoveClick = useCallback(() => {
    onClick(index);
  }, [isActive, onClick, index]);

  if (isMobile) {
    return (
      <ConstructorGridItemWrapper
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
          <div
            onClick={
              isActive ? handleMobilePopoverClose : handleMobilePopoverOpen
            }
          >
            <RemoveIconWrapper
              visible={isActive}
              small={
                mode === ConstructoreMode.MacaronLarge ||
                mode === ConstructoreMode.ZephyrMedium
              }
              onClick={handleRemoveClick}
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
        ) : (
          <div
            onClick={
              isActive ? handleMobilePopoverClose : handleMobilePopoverOpen
            }
          >
            <ImageWrapper
              style={{ height: '100%', background: '#F5F5F5', opacity: 0.5 }}
              src={placeholder}
            />
          </div>
        )}
      </ConstructorGridItemWrapper>
    );
  }
  return (
    <ConstructorGridItemWrapper
      onClick={handleRemoveClick}
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
          placement={'bottom'}
          open={mouseOver}
          onOpen={onMouseOver}
          onClose={onMouseOut}
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
          open={mouseOver}
          onOpen={onMouseOver}
          onClose={onMouseOut}
        >
          <div>
            <ImageWrapper
              style={{ height: '100%', background: '#F5F5F5', opacity: 0.5 }}
              src={placeholder}
            />
          </div>
        </TooltipStyled>
      )}
    </ConstructorGridItemWrapper>
  );
}

export default memo(ConstructorGridItem);
