import React from 'react';
import MaskedInput from 'react-text-mask';

interface ITextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

function PhoneInput(props: ITextMaskCustomProps) {
  const { inputRef, ...other } = props;
  // prettier-ignore
  const maks = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      showMask={true}
      mask={maks}
      guide={true}
    />
  );
}

export default PhoneInput;
