import React from 'react';
import { MASK } from '@constants';
import MaskedInput, { MaskedInputProps } from 'react-text-mask';
import { fillMaskByValue, militaryTime } from '@utils/Helper';
import { TextField, TextFieldProps } from '@material-ui/core';
import ScheduleIcon from '@material-ui/icons/Schedule';

const TIME_MASK = [/\d/, /\d/, ':', /\d/, /\d/];
export const TIME_INPUT_TEST_ID = 'time-input';
export interface ITimeMaskedInputProps extends MaskedInputProps {
  inputRef: (ref: any) => void;
}

const fillByTimeMask = (value: string) =>
  fillMaskByValue(MASK.militaryTimeEmptyMask, value);

const checkTimeInputValidity = (conformedValue: string) => {
  const maskedValue = fillByTimeMask(conformedValue);
  const isValidMilitaryTime = militaryTime(maskedValue);
  if (isValidMilitaryTime || !conformedValue.length) {
    return conformedValue;
  } else {
    return false;
  }
};

function TimeMaskedInput(props: ITimeMaskedInputProps) {
  const { inputRef, onBlur, onChange, ...other } = props;
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value) {
      event.target.value = fillByTimeMask(value);
    }
    onChange && onChange(event);
    onBlur && onBlur(event);
  };
  const handleKeyPress = (event: any) => {
    const value = event.target.value;
    const charCode = event.charCode;
    if (charCode === 13) {
      // enter
      event.target.value = fillByTimeMask(value);
      onChange && onChange(event);
    }
  };
  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      placeholderChar={'\u2000'}
      mask={TIME_MASK}
      showMask={true}
      guide={false}
      pipe={checkTimeInputValidity}
      onBlur={handleBlur}
      onKeyPress={handleKeyPress}
    />
  );
}

const TimeInput = (props: TextFieldProps) => {
  return (
    <TextField
      {...props}
      InputProps={{
        inputComponent: TimeMaskedInput as React.FunctionComponent,
        endAdornment: <ScheduleIcon fontSize='small' />,
      }}
    />
  );
};

export default TimeInput;
