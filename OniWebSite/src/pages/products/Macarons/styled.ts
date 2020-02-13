import styled from 'styled-components';
import { ExpansionPanelSummary } from '@material-ui/core';
import colors from '@constants/colors';

export const MacaronsWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 50px 300px 50px 500px;
`;

export const MacaronsTitle = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
  flex-direction: column;
`;

export const MacaronsInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
`;

export const MacaronsMixSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 327px;
  height: 360px;
  flex-direction: column;
  align-items: center;
  img {
    width: auto;
    height: 250px;
    padding-top: 20px;
  }
  .title {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .price {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 48px;

    .half {
      width: 50%;
    }
  }
`;

export const MacaronsConstructorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 45px 0 30px 0px;
  position: absolute;
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
