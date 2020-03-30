import React from 'react';
import { TimePicker } from '@material-ui/pickers';

export interface ITimeInputProps {
  selectedDate?: any;
  emptyLabel?: string;
  variant: 'dialog' | 'inline' | 'static';
  fullWidth?: boolean;
  style?: React.CSSProperties;
  handleDateChange: (date: Date | null) => void;
}

const TimeInput = ({
  selectedDate,
  emptyLabel,
  handleDateChange,
  fullWidth,
  style,
  variant = 'inline',
}: ITimeInputProps) => {
  return (
    // docs: https://material-ui-pickers.dev/api/KeyboardTimePicker
    <TimePicker
      margin='normal'
      label={emptyLabel}
      value={selectedDate}
      variant={variant}
      ampm={false}
      autoOk
      disableToolbar
      inputVariant='outlined'
      style={style}
      fullWidth={fullWidth}
      // orientation='landscape'
      onChange={handleDateChange}
    />
  );
};

export default TimeInput;
