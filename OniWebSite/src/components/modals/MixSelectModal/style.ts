import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';
import colors from '@constants/colors';

export const useStyles = makeStyles({
  text: {
    opacity: 0.9,
    color: 'rgba(0,0,0,0.54)',
    fontSize: '18px',
    lineHeight: '20px',
    textAlign: 'center',
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export const SelectedMixWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: center;
  border: 1px solid ${colors.primary.grey};
`;

export const SelectedMixWrapperCell = styled.div`
  display: flex;
  flex-direction: row;
  width: 25%;
  align-self: center;
  & img {
    width: 180px;
    height: auto;
    max-height: 120px;
    object-fit: contain;
  }
  &:last-child {
    justify-content: space-between;
    align-items: center;
  }
`;