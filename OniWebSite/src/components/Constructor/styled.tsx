import styled from 'styled-components';
import {
  ExpansionPanelSummary,
  ExpansionPanel,
  ExpansionPanelProps,
  ExpansionPanelDetails,
  Typography,
} from '@material-ui/core';
import colors from '@constants/colors';
import React from 'react';
import { BREAKPOINT } from '@constants';
import { ImageWithFallback } from '@common/ImageWithFallback';

interface IExpansionPanelStyled extends ExpansionPanelProps {
  isSticky?: boolean;
}

export const ExpansionPanelStyled = styled(
  ({ isSticky, ...rest }: IExpansionPanelStyled) => <ExpansionPanel {...rest} />
).attrs({
  classes: {
    expanded: 'expanded',
  },
})<IExpansionPanelStyled>`
  display: flex;
  flex-direction: column;
  box-shadow: none;
  z-index: 1;
  width: 100%;

  @media (min-width: ${BREAKPOINT}) {
    position: absolute;
    top: 45px;
    width: 310px;
    margin-left: 20px;
  }

  &.expanded {
    margin-left: 20px;
  }

  ${({ isSticky }) =>
    isSticky &&
    `
        @media (max-width: ${BREAKPOINT}) {
          width: inherit;
          position: fixed;
          top: 164px;
          max-width: inherit;
        }
        @media (min-width: ${BREAKPOINT}) {
          position: fixed;
          top: 45px;
          width: 310px;
        }
    `};
`;

export const ExpansionPanelSummaryStyled = styled(ExpansionPanelSummary).attrs({
  classes: {
    expanded: 'expanded',
  },
})`
  color: ${colors.primary.white};
  background-color: ${colors.secondary.pink};

  @media (max-width: ${BREAKPOINT}) {
    padding: 5px 15px;
    margin: 0 25px;
  }

  &.expanded {
    background-color: ${colors.primary.white};
    color: ${colors.primary.black};
    border: 1px solid ${colors.primary.grey};
    min-height: 0;
    svg {
      color: ${colors.secondary.pink};
    }
  }
  .MuiExpansionPanelSummary-root.Mui-expanded {
  }
  .MuiExpansionPanelSummary-content.Mui-expanded {
    margin: 12px 0;
  }
  svg {
    color: ${colors.primary.white};
  }
`;

export const ExpansionPanelDetailsStyled = styled(ExpansionPanelDetails)`
  padding: 0px;
`;

export const ConstructorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ModeSelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CenteredRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const SurpriseMe = styled(Typography)`
  height: auto;
  cursor: pointer;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;

export const ConstructorGridWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;

interface IConstructorGridItemWrapper {
  size: 'small' | 'medium' | 'large';
  removeEnabled: boolean;
}

export const ConstructorGridItemWrapper = styled.div<
  IConstructorGridItemWrapper
>`
  display: flex;
  justify-content: center;
  background-color: ${colors.primary.grey};
  margin: 2px 1px;
  position: relative;
  border: 1px solid ${colors.primary.grey};
  box-sizing: border-box;

  ${({ size }) =>
    size === 'small'
      ? `width: 74px; height: 74px;`
      : size === 'medium'
      ? `width: 100px; height: 100px; `
      : `width: 150px; height: 150px; `};

  ${({ removeEnabled }) => removeEnabled && `cursor: pointer;`};
`;

export const ImageWrapper = styled(ImageWithFallback)`
  width: 100%;
  height: auto;
  object-fit: contain;
  background: ${colors.primary.white};
`;

interface IRemoveIconWrapper {
  visible: boolean;
  small?: boolean;
}

export const RemoveIconWrapper = styled.div<IRemoveIconWrapper>`
  top: 50%;
  left: 50%;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  opacity: 0.5;
  background: ${colors.secondary.dark};
  border: 2px solid ${colors.primary.white};
  position: absolute;
  margin: -40px 0 0 -45px;
  display: none;
  align-items: center;
  justify-content: center;
  ${({ visible }) =>
    visible &&
    `
      display: flex;
    `};
  ${({ small }) =>
    small &&
    `
      width: 60px;
      height: 60px;
      margin: -32px 0 0 -32px;
    `};
`;
