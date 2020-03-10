import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  loadingWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  loadingRoot: {
    margin: 'auto',
  },
};

export interface ILoadingProps {
  classes: any;
}

export default withStyles(styles as any)(({ classes }: ILoadingProps) => {
  return (
    <div className={classes.loadingWrapper}>
      <CircularProgress
        className={classes.loadingRoot}
        id={'circular-progress'}
      />
    </div>
  );
});
