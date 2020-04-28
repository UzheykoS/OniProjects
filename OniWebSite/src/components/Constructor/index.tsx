import React, { useEffect, useState } from 'react';
import { Typography, useMediaQuery } from '@material-ui/core';
import {
  ExpansionPanelSummaryStyled,
  ExpansionPanelStyled,
  ExpansionPanelDetailsStyled,
} from './styled';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Constructor, IConstructorProps } from './Constructor';
import { BREAKPOINT } from '@constants';

const STICKY_LIMIT = 740;
const STICKY_LIMIT_MOBILE = 1480;

export interface IConstructorContainerProps extends IConstructorProps {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ConstructorContainer({
  expanded,
  setExpanded,
  ...rest
}: IConstructorContainerProps) {
  const [isSticky, setIsSticky] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);
  const limit = isMobile ? STICKY_LIMIT_MOBILE : STICKY_LIMIT;
  const [scrollTop, setScrollTop] = useState(window.scrollY);

  const handleScroll = () => {
    setScrollTop(window.scrollY);
  };

  useEffect(() => {
    if (scrollTop > limit) {
      setIsSticky(true);
    } else if (scrollTop < limit) {
      setIsSticky(false);
    }
  }, [scrollTop]);

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
        <Typography
          variant='button'
          style={{
            height: 'auto',
            width: 'auto',
            letterSpacing: isMobile ? 'px' : '',
            fontSize: isMobile ? '13px' : '',
          }}
        >
          СОБРАТЬ СВОЙ НАБОР
        </Typography>
      </ExpansionPanelSummaryStyled>
      <ExpansionPanelDetailsStyled>
        <Constructor {...rest} />
      </ExpansionPanelDetailsStyled>
    </ExpansionPanelStyled>
  );
}
