import React from 'react';
import {
  Typography,
  InputBaseComponentProps,
  useMediaQuery,
} from '@material-ui/core';
import {
  FormWrapper,
  MainWrapper,
  TextFieldStyled,
  FormRowWrapper,
  useStyles,
} from './styled';
import { Button } from '@common/Button';
import { IContactData, IRequiredContactData } from '.';
import PhoneInput from '@common/PhoneInput';
import DatePickerWrapper from '@common/DatePicker';
import { Flex } from '@styles/styled';
import { BREAKPOINT } from '@constants';
import { DeliveryType } from './Delivery';

export const INVALID_NAME = 'Введите Ваше имя';
export const INVALID_PHONE = 'Введите правильный номер телефона';
export const INVALID_ADDRESS = 'Введите адрес';
export const numberPattern = /\d+/g;

interface IProps {
  delivery: DeliveryType;
  totalPrice: number;
  formData: IContactData;
  setFormData: (contactData: IContactData) => void;
  handleContinue: () => void;
  handleBackClick?: () => void;
}

export function Contacts({
  delivery,
  formData,
  setFormData,
  handleContinue,
  handleBackClick,
}: IProps) {
  const classes = useStyles();
  const [formErrors, setFormErrors] = React.useState<IRequiredContactData>({});
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);

  const handleChange = (key: string, value: string) => {
    if (key === 'phone') {
      const numberString = value.match(numberPattern)?.join('');
      setFormData({ ...formData, [key]: numberString });
    } else {
      setFormData({ ...formData, [key]: value });
    }
  };

  const handleKeyDown = (e: any) => {
    const key = e.keyCode || e.charCode;
    if (key === 8 || key === 46) {
      const numberString = e.target.value.match(numberPattern)?.join('');
      setFormData({
        ...formData,
        phone: numberString
          ? numberString.substring(0, numberString.length - 1)
          : '',
      });
      e.preventDefault();
    }
  };

  const handleBlur = (key: string, value: string) => {
    if (key === 'name') {
      setFormErrors({ ...formErrors, name: value ? undefined : INVALID_NAME });
    }
    if (key === 'phone') {
      setFormErrors({
        ...formErrors,
        phone: !value || value.indexOf('_') > -1 ? INVALID_PHONE : undefined,
      });
    }
    if (key === 'address' && delivery === DeliveryType.Delivery) {
      setFormErrors({
        ...formErrors,
        address: value ? undefined : INVALID_ADDRESS,
      });
    }
  };

  const handleDateChange = (date: Date | null) => {
    setFormData({ ...formData, date: date ? date.toISOString() : null });
  };

  const handleTimeChange = (time: string) => {
    setFormData({ ...formData, time: time });
  };

  const handleNextClick = () => {
    handleContinue();
  };

  function handleSubmit() {
    const errors = { ...formErrors };
    errors.name = formData.name ? undefined : INVALID_NAME;
    errors.phone = formData.phone ? undefined : INVALID_PHONE;
    errors.address =
      delivery !== DeliveryType.Delivery || formData.address
        ? undefined
        : INVALID_ADDRESS;
    setFormErrors(errors);

    if (Object.values(errors).filter(Boolean).length) {
      return;
    } else {
      handleNextClick();
    }
  }

  return (
    <MainWrapper>
      <Typography variant={'body2'} style={{ marginBottom: 14 }}>
        * Поле обязательное к заполнению
      </Typography>
      <FormWrapper noValidate autoComplete='on'>
        <Flex style={{ width: '100%' }} direction={isMobile ? 'column' : 'row'}>
          <Flex
            direction='column'
            style={{
              width: isMobile ? '100%' : '50%',
              margin: isMobile ? '15px 5px 0 5px' : '15px 5px',
            }}
          >
            <Typography variant={'h3'}>КОНТАКТНЫЕ ДАННЫЕ</Typography>
            <TextFieldStyled
              label='Имя'
              name='name'
              value={formData.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('name', e.target.value)
              }
              onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                handleBlur('name', e.target.value)
              }
              variant='outlined'
              required
              FormHelperTextProps={{
                classes: { root: classes.formHelperText },
              }}
              error={!!formErrors.name}
              helperText={formErrors.name}
            />
            <TextFieldStyled
              label='Телефон'
              type={'tel'}
              name='phone'
              value={formData.phone}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('phone', e.target.value)
              }
              onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                handleBlur('phone', e.target.value)
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
              error={!!formErrors.phone}
              helperText={formErrors.phone}
            />
            <TextFieldStyled
              label='Комментарий'
              value={formData.comments}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('comments', e.target.value)
              }
              variant='outlined'
              multiline
              rowsMax='4'
            />
          </Flex>

          <Flex
            direction='column'
            style={{
              width: isMobile ? '100%' : '50%',
              margin: isMobile ? '0px 5px 15px 5px' : '15px 5px',
            }}
          >
            <FormRowWrapper style={{ marginTop: isMobile ? 0 : 18 }}>
              <DatePickerWrapper
                variant={isMobile ? 'dialog' : 'inline'}
                label='Дата'
                value={formData.date}
                style={{ margin: '12px 5px 9px 5px', width: '100%' }}
                onChange={handleDateChange}
              />
              <TextFieldStyled
                label='Время'
                type='time'
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                value={formData.time || ''}
                fullWidth
                variant='outlined'
                onChange={ev => handleTimeChange(ev.target.value)}
              />
            </FormRowWrapper>
            <TextFieldStyled
              label='Адрес'
              name='address'
              value={formData.address}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('address', e.target.value)
              }
              onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                handleBlur('address', e.target.value)
              }
              variant='outlined'
              disabled={delivery === DeliveryType.SelfService}
              required={delivery === DeliveryType.Delivery}
              FormHelperTextProps={{
                classes: { root: classes.formHelperText },
              }}
              error={!!formErrors.address}
              helperText={formErrors.address}
            />
          </Flex>
        </Flex>
      </FormWrapper>
      <Flex justifyBetween>
        <Button
          color='secondary'
          small={isMobile}
          rounded
          onClick={handleBackClick}
        >
          НАЗАД
        </Button>
        <Button rounded small={isMobile} onClick={handleSubmit}>
          ДАЛЬШЕ
        </Button>
      </Flex>
    </MainWrapper>
  );
}
