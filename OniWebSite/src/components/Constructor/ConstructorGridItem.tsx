import React, { useState } from 'react';
import { ConstructoreMode } from './Constructor';
import {
  ConstructorGridItemWrapper,
  RemoveIconWrapper,
  ImageWrapper,
} from './styled';
import colors from '@constants/colors';
import RemoveIcon from '@material-ui/icons/Remove';
import { IProduct } from '@constants/products';
import { useMediaQuery } from '@material-ui/core';
import { BREAKPOINT } from '@constants';
import Zoom from '@material-ui/core/Zoom';
import { TooltipStyled } from '@common/Tooltip/styled';

interface IConstructorGridItemProps {
  item?: IProduct;
  mode: ConstructoreMode;
  index: number;
  isActive: boolean;
  onClick: (index?: number) => void;
}

export function ConstructorGridItem({
  item,
  onClick,
  mode,
  index,
  isActive,
}: IConstructorGridItemProps) {
  const [mouseOver, setMouseOver] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);

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
            enterTouchDelay={0}
            leaveTouchDelay={0}
            open={isActive}
            onOpen={() => onClick(index)}
            onClose={() => onClick()}
          >
            <div>
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
            enterTouchDelay={0}
            leaveTouchDelay={0}
            open={isActive}
            onOpen={() => onClick(index)}
            onClose={() => onClick()}
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
              src={getPlaceholder()}
            />
          </div>
        </TooltipStyled>
      )}
    </ConstructorGridItemWrapper>
  );
}
