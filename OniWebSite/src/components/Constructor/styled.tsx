import styled from 'styled-components';
import {
  AccordionSummary,
  Accordion,
  AccordionProps,
  AccordionDetails,
  Typography,
  Dialog,
  Chip,
  Popover,
} from '@material-ui/core';
import colors from '@constants/colors';
import React from 'react';
import { BREAKPOINT } from '@constants';
import { ImageWithFallback } from '@common/ImageWithFallback';

interface IExpansionPanelStyled extends AccordionProps {
  isSticky?: boolean | null;
}

export const ExpansionPanelStyled = styled(
  ({ isSticky, ...rest }: IExpansionPanelStyled) => <Accordion {...rest} />
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
    top: 107px;
    width: 310px;
    margin-left: 20px;
  }

  &.expanded {
    @media (min-width: ${BREAKPOINT}) {
      margin-left: 20px;
    }
  }

  ${({ isSticky }) =>
    isSticky === null
      ? `
      @media (min-width: ${BREAKPOINT}) {
        position: absolute;
        bottom: 380px;
        top: auto;
      }
    `
      : isSticky === true &&
        `
        @media (max-width: ${BREAKPOINT}) {
          position: fixed;
          top: 130px;
          left: 5%;
          width: calc(100% - 10%);
        }
        @media (min-width: ${BREAKPOINT}) {
          position: fixed;
          top: 135px;
          width: 310px;
        }
    `};
`;

export const ExpansionPanelSummaryStyled = styled(AccordionSummary).attrs({
  classes: {
    expanded: 'expanded',
  },
})`
  color: ${colors.primary.white};
  background-color: ${colors.secondary.pink};

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

export const ExpansionPanelDetailsStyled = styled(AccordionDetails)`
  padding: 0px;
`;

export const ConstructorWrapper = styled.div<
  Pick<IConstructorGridItemWrapper, 'size'>
>`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ size }) =>
    size === 'small'
      ? `width: 310px;`
      : size === 'medium'
      ? `width: 312px;`
      : `width: 462px;`};
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
  align-self: flex-end;
  margin: 0.2rem 0.5rem 0.6rem 0.5rem;
  font-size: 12px;

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
  margin-bottom: 0.5rem;
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
      : `width: 150px; height: 150px; margin: 3px 2px;`};

  ${({ removeEnabled }) => removeEnabled && `cursor: pointer;`};
`;

export const ImageWrapper = styled(ImageWithFallback)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 0 10px;
  box-sizing: border-box;
`;

interface IRemoveIconWrapper {
  visible: boolean;
  small?: boolean;
}

export const RemoveIconWrapper = styled.div<IRemoveIconWrapper>`
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  opacity: 0.5;
  background: ${colors.secondary.dark};
  border: 2px solid ${colors.primary.white};
  position: absolute;
  margin: -32px 0 0 -32px;
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
      width: 45px;
      height: 45px;
      margin: -25px 0 0 -25px;
    `};
`;

export const ConstructorDialog = styled(Dialog).attrs({
  classes: {
    paper: 'paper',
  },
})`
  .paper {
    margin: 5%;
    padding: 20px 10px 30px 10px;
  }
`;

export const ChipStyled = styled(Chip).attrs({
  classes: {
    colorSecondary: 'colorSecondary',
    outlinedSecondary: 'outlinedSecondary',
  },
})`
  margin: 0px 5px;
  height: 36px;
  border-radius: 50px;
  width: 90px;

  &.colorSecondary {
    background-color: ${colors.primary.grey};
  }

  &.outlinedSecondary {
    background-color: ${colors.primary.white};
    color: ${colors.primary.black};
  }
`;

export const StyledHoverablePopover = styled(Popover).attrs({
  classes: {
    root: 'root',
    paper: 'paper',
  },
})`
  &.root {
    pointer-events: none;
  }
  .paper {
    width: auto;
    padding: 16px;
    box-sizing: border-box;
    pointer-events: auto; // need to follow pattern with hover over interactive content
    font-family: 'Manrope';
  }
`;
