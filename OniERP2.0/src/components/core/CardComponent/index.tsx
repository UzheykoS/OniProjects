import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { StyledCard, StyledCardMedia } from './styled';

export interface ICardComponentProps {
  imageUrl: string;
  title: string;
  description?: string;
  count?: number;
  decreaseCount?: () => void;
  onClick: () => void;
}

const CardComponent = ({
  imageUrl,
  title,
  description,
  count,
  decreaseCount,
  onClick
}: ICardComponentProps) => {
  return (
    <StyledCard>
      <CardActionArea onClick={onClick}>
        <StyledCardMedia
          component='img'
          alt={title}
          height='140'
          image={imageUrl}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {title}
          </Typography>
          <Typography component='p'>{description}</Typography>
        </CardContent>
      </CardActionArea>
      {count !== undefined && (
        <CardActions>
          <Typography component='p'>{count}</Typography>
          <Button size='small' color='primary' onClick={decreaseCount}>
            Remove
          </Button>
        </CardActions>
      )}
    </StyledCard>
  );
};

export default CardComponent;
