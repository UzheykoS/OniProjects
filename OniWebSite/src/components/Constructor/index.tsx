import React, { useEffect, useState } from 'react';
import { Typography, useMediaQuery, IconButton } from '@material-ui/core';
import {
  ExpansionPanelSummaryStyled,
  ExpansionPanelStyled,
  ExpansionPanelDetailsStyled,
  ConstructorDialog,
} from './styled';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Constructor, IConstructorProps } from './Constructor';
import { BREAKPOINT } from '@constants';
import CloseIcon from '@material-ui/icons/Close';
import { Flex } from '@styles/styled';

export interface IConstructorContainerProps extends IConstructorProps {
  expanded: boolean;
  stickyLimit: number;
  limitBottom?: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ConstructorContainer({
  expanded,
  setExpanded,
  stickyLimit,
  limitBottom,
  ...rest
}: IConstructorContainerProps) {
  const [isSticky, setIsSticky] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);
  const [isLargeFont, setIsLargeFont] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > stickyLimit) {
      setIsSticky(true);
    } else if (window.scrollY < stickyLimit) {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    setIsLargeFont(true);
    setTimeout(() => {
      setIsLargeFont(false);
    }, 100);
  }, [rest.state.items.length, rest.state.randomItems.length]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isMobile) {
    return (
      <ExpansionPanelStyled
        isSticky={isSticky}
        expanded={expanded}
        style={{ opacity: expanded ? 0 : 1 }}
        onChange={() => setExpanded(!expanded)}
      >
        <ExpansionPanelSummaryStyled expandIcon={<ExpandMoreIcon />}>
          <Typography
            variant='button'
            style={{
              height: 'auto',
              width: 'auto',
              fontSize: '13px',
            }}
          >
            СОБРАТЬ СВОЙ НАБОР&nbsp;
          </Typography>
          {isMobile && (
            <Typography
              variant='button'
              style={{
                height: 'auto',
                width: 'auto',
                fontSize: isLargeFont ? '24px' : '13px',
                lineHeight: '22px',
                transition: 'font-size .1s',
              }}
            >
              {` (${rest.state.items.length + rest.state.randomItems.length})`}
            </Typography>
          )}
        </ExpansionPanelSummaryStyled>

        <ConstructorDialog open={expanded} onClose={() => setExpanded(false)}>
          <Flex
            justifyBetween
            style={{ border: '1px solid #EEF2F0', paddingLeft: 10 }}
          >
            <Typography
              variant='button'
              style={{
                height: 'auto',
                fontSize: '13px',
                alignSelf: 'center',
                letterSpacing: '3px',
              }}
            >
              СОБРАТЬ СВОЙ НАБОР
            </Typography>
            <IconButton onClick={() => setExpanded(false)}>
              <CloseIcon />
            </IconButton>
          </Flex>
          <ExpansionPanelDetailsStyled>
            <Constructor
              closeConstructor={() => setExpanded(false)}
              {...rest}
            />
          </ExpansionPanelDetailsStyled>
        </ConstructorDialog>
      </ExpansionPanelStyled>
    );
  }

  return (
    <ExpansionPanelStyled
      isSticky={limitBottom === true ? null : isSticky}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      <ExpansionPanelSummaryStyled expandIcon={<ExpandMoreIcon />}>
        <Typography
          variant='button'
          style={{
            height: 'auto',
            width: 'auto',
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
