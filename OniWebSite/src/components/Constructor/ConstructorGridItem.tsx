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
  item: IProduct;
  mode: ConstructoreMode;
  index: number;
  onClick: (index: number) => void;
}

export function ConstructorGridItem({
  item,
  onClick,
  mode,
  index,
}: IConstructorGridItemProps) {
  const [mouseOver, setMouseOver] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);

  const onMouseOver = () => {
    !isMobile && setMouseOver(true);
  };

  const onMouseOut = () => {
    !isMobile && setMouseOver(false);
  };

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
        >
          <div>
            <RemoveIconWrapper
              visible={mouseOver || isMobile}
              small={
                mode === ConstructoreMode.MacaronLarge ||
                mode === ConstructoreMode.ZephyrMedium ||
                isMobile
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
