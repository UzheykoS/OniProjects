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

interface IExpansionPanelStyled extends ExpansionPanelProps {
  isSticky?: boolean;
}

export const ExpansionPanelStyled = styled(
  ({ isSticky, ...rest }: IExpansionPanelStyled) => <ExpansionPanel {...rest} />
)<IExpansionPanelStyled>`
  display: flex;
  flex-direction: column;
  top: 45px;
  position: absolute;
  width: 310px;
  box-shadow: none;
  ${({ isSticky }) =>
    isSticky &&
    `
        position: fixed;
        width: inherit;
    `};
`;

export const ExpansionPanelSummaryStyled = styled(ExpansionPanelSummary).attrs({
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

  ${({ size }) =>
    size === 'small'
      ? `width: 74px; height: 74px;`
      : size === 'medium'
      ? `width: 100px; height: 100px; `
      : `width: 150px; height: 150px; `};

  ${({ removeEnabled }) => removeEnabled && `cursor: pointer;`};
`;

export const ImageWrapper = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

interface IRemoveIconWrapper {
  visible: boolean;
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
`;
