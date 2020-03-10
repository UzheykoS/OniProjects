import React from 'react';
import styled from '@styled-components';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

export const StyledCard = styled(props => <Card {...props} />).attrs({
  classes: {
    root: 'cardWrapper',
  },
})`
  &.cardWrapper {
    max-width: 300px;
    margin: 20px;
  }
`;
interface IStyledSnackbarContent {
  error?: boolean;
}
export const StyledCardMedia = styled(props => <CardMedia {...props} />).attrs({
  classes: {
    root: 'cardMediaWrapper',
  },
})<IStyledSnackbarContent>`
  &.cardMediaWrapper {
    object-fit: cover;
  }
`;
