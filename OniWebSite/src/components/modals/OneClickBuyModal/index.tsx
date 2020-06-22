import React, { FC, useState } from 'react';
import ModalWrapper, { ModalFormProps } from '@components/ModalWrapper';
import {
  Typography,
  InputBaseComponentProps,
  makeStyles,
  useMediaQuery,
} from '@material-ui/core';
import colors from '@constants/colors';
import {
  numberPattern,
  INVALID_PHONE,
} from '@pages/Checkout/CheckoutStepper/Contacts';
import { TextFieldStyled } from '@pages/Checkout/CheckoutStepper/styled';
import PhoneInput from '@common/PhoneInput';
import { BREAKPOINT } from '@constants';

export const useStyles = makeStyles({
  formHelperText: {
    position: 'absolute',
    bottom: '-22px',
  },
});

interface IOneClickBuyModalModalProps extends ModalFormProps {
  confirmSubmit: (phone: string) => void;
}
const OneClickBuyModal: FC<IOneClickBuyModalModalProps> = ({
  confirmSubmit,
  closeModal,
  open,
}) => {
  const [phone, setPhone] = useState<string>();
  const [phoneError, setPhoneError] = useState<string>();
  const classes = useStyles();
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);

  const handleChange = (value: string) => {
    const numberString = value.match(numberPattern)?.join('');
    setPhone(numberString);
  };

  const handleKeyDown = (e: any) => {
    const key = e.keyCode || e.charCode;
    if (key === 8 || key === 46) {
      const numberString = e.target.value.match(numberPattern)?.join('');
      setPhone(
        numberString ? numberString.substring(0, numberString.length - 1) : ''
      );
      e.preventDefault();
    }
  };

  const handleBlur = (value: string) => {
    setPhoneError(
      !value || value.indexOf('_') > -1 ? INVALID_PHONE : undefined
    );
  };

  function handleSubmit() {
    if (!!phoneError || !phone) {
      return;
    } else {
      confirmSubmit(phone);
    }
  }

  return (
    <ModalWrapper
      title={isMobile ? 'Купить в 1 клик' : 'Купить в один клик'}
      open={open}
      onClose={closeModal}
      onSubmit={handleSubmit}
      showCancelButton={false}
      saveButtonLabel='Отправить'
      maxWidth={'xs'}
    >
      <Typography
        style={{
          color: colors.secondary.dark,
          opacity: 0.9,
          fontSize: 18,
          lineHeight: '20px',
          textAlign: 'center',
          marginBottom: 20,
        }}
        variant={'body2'}
      >
        Оставьте свой номер телефона и мы перезвоним в течении 20 минут
      </Typography>
      <TextFieldStyled
        label='Телефон'
        type={'tel'}
        name='phone'
        value={phone}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(e.target.value)
        }
        onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
          handleBlur(e.target.value)
        }
        onKeyDown={handleKeyDown}
        variant='outlined'
        required
        InputProps={{
          inputComponent: PhoneInput as React.FunctionComponent<
            InputBaseComponentProps
          >,
        }}
        FormHelperTextProps={{
          classes: { root: classes.formHelperText },
        }}
        style={{ marginBottom: 30 }}
        error={!!phoneError}
        helperText={phoneError}
        fullWidth
      />
    </ModalWrapper>
  );
};

export default OneClickBuyModal;
