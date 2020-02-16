import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import {
  ExpansionPanelSummaryStyled,
  ExpansionPanelStyled,
  ExpansionPanelDetailsStyled,
} from './styled';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  MacaronsConstructor,
  IMacaronsConstructorProps,
} from './MacaronsConstructor';

const STICKY_LIMIT = 650;

export interface IMacaronsConstructorContainerProps
  extends IMacaronsConstructorProps {
  expanded: boolean;
  setExpanded: any;
}

export function MacaronsConstructorContainer({
  expanded,
  setExpanded,
  ...rest
}: IMacaronsConstructorContainerProps) {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > STICKY_LIMIT) {
      setIsSticky(true);
    } else if (window.scrollY < STICKY_LIMIT) {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ExpansionPanelStyled
      isSticky={isSticky}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      <ExpansionPanelSummaryStyled expandIcon={<ExpandMoreIcon />}>
        <Typography variant='button' style={{ height: 'auto' }}>
          СОБРАТЬ СВОЙ НАБОР
        </Typography>
      </ExpansionPanelSummaryStyled>
      <ExpansionPanelDetailsStyled>
        <MacaronsConstructor {...rest} />
      </ExpansionPanelDetailsStyled>
    </ExpansionPanelStyled>
  );
}
