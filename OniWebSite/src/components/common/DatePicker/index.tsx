import React from 'react';
import { StyledDatePicker } from './styled';
import { DATE_FORMAT } from '@constants';

interface IDatePickerProps {
  dateFormat?: string;
  disabled?: boolean;
  variant?: 'dialog' | 'inline' | undefined;
  error?: string;
  emptyLabel?: string;
  value: any;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  handleDateChange: (date: Date | null) => void;
}

const DatePickerWrapper = ({
  dateFormat = DATE_FORMAT,
  disabled,
  variant,
  error,
  value,
  emptyLabel,
  fullWidth,
  style,
  handleDateChange,
}: IDatePickerProps) => {
  return (
    <StyledDatePicker
      autoOk
      variant={variant}
      disabled={disabled}
      error={!!error}
      helperText={error ? error : <></>}
      format={dateFormat}
      autoComplete='none'
      emptyLabel={emptyLabel}
      inputVariant='outlined'
      fullWidth={fullWidth}
      margin='normal'
      style={style}
      value={value}
      onChange={handleDateChange}
    />
  );
};

export default DatePickerWrapper;
