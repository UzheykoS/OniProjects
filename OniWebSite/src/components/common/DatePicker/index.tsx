import React from 'react';
import { StyledDatePicker } from './styled';
import { DATE_FORMAT } from '@constants';
import { DatePickerProps } from '@material-ui/pickers';

interface IDatePickerProps extends DatePickerProps {
  dateFormat?: string;
  disabled?: boolean;
  variant?: 'dialog' | 'inline' | undefined;
  errorText?: string;
  label?: string;
  value: any;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  onChange: (date: Date | null) => void;
}

const DatePickerWrapper = ({
  dateFormat = DATE_FORMAT,
  disabled,
  variant,
  errorText,
  value,
  label,
  fullWidth,
  style,
  onChange,
  ...rest
}: IDatePickerProps) => {
  return (
    <StyledDatePicker
      autoOk
      variant={variant}
      disabled={disabled}
      error={!!errorText}
      helperText={errorText ? errorText : <></>}
      format={dateFormat}
      autoComplete='none'
      label={label}
      inputVariant='outlined'
      fullWidth={fullWidth}
      margin='normal'
      style={style}
      value={value}
      disablePast
      onChange={onChange}
      {...rest}
    />
  );
};

export default DatePickerWrapper;
