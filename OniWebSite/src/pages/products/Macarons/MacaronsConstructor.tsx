import React from 'react';
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelDetails,
} from '@material-ui/core';
import {
  MacaronsConstructorWrapper,
  ExpansionPanelSummaryStyled,
} from './styled';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export function MacaronsConstructor() {
  return (
    <MacaronsConstructorWrapper>
      <ExpansionPanel>
        <ExpansionPanelSummaryStyled expandIcon={<ExpandMoreIcon />}>
          <Typography variant='button' style={{ height: 'auto' }}>
            СОБРАТЬ СВОЙ НАБОР
          </Typography>
        </ExpansionPanelSummaryStyled>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </MacaronsConstructorWrapper>
  );
}
