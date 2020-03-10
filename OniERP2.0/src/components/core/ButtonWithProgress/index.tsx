import * as React from 'react';
import ButtonComponent from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

function Button(props) {
  const {
    className,
    disabled,
    loading,
    children,
    ...selfProps
  } = props;
  return (
    <ButtonComponent
      disabled={disabled || loading}
      className={className}
      {...selfProps}
    >
      {loading ? <CircularProgress size={16} /> : children}
    </ButtonComponent>
  );
}

export default Button;
