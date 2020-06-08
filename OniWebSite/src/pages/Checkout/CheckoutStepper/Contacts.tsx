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
import TimeInput from '@common/TimeInput';
import { Flex } from '@styles/styled';
import { BREAKPOINT } from '@constants';
import { DeliveryType } from './Delivery';
import { TotalMobile } from '../styled';
import Close from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';

export const INVALID_NAME = 'Введите Ваше имя';
export const INVALID_PHONE = 'Введите правильный номер телефона';
const numberPattern = /\d+/g;

interface IProps {
  delivery: DeliveryType;
  totalPrice: number;
  formData: IContactData;
  setFormData: (contactData: IContactData) => void;
  handleContinue: () => void;
}

export function Contacts({
  delivery,
  totalPrice,
  formData,
  setFormData,
  handleContinue,
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
  };

  const handleDateChange = (date: Date | null) => {
    setFormData({ ...formData, date: date ? date.toISOString() : null });
  };

  const handleTimeChange = (time: Date | null) => {
    setFormData({ ...formData, time: time?.toISOString() });
  };

  const handleNextClick = () => {
    handleContinue();
  };

  function handleSubmit() {
    const errors = { ...formErrors };
    errors.name = formData.name ? undefined : INVALID_NAME;
    errors.phone = formData.phone ? undefined : INVALID_PHONE;
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
                style={{ margin: '20px 5px 17px 5px', width: '100%' }}
                onChange={handleDateChange}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={() => handleDateChange(null)}
                      style={{ margin: '-0.5em' }}
                    >
                      <Close />
                    </IconButton>
                  ),
                }}
              />
              <TimeInput
                emptyLabel='Время'
                selectedDate={formData.time}
                variant={isMobile ? 'dialog' : 'inline'}
                style={{ margin: '20px 5px 17px 5px', width: '100%' }}
                handleDateChange={handleTimeChange}
              />
            </FormRowWrapper>
            <TextFieldStyled
              label='Адрес'
              value={formData.address}
              disabled={delivery === DeliveryType.SelfService}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('address', e.target.value)
              }
              variant='outlined'
            />
          </Flex>
        </Flex>
      </FormWrapper>
      <Flex justifyBetween>
        <Flex style={{ alignItems: 'center' }}>
          <TotalMobile>Итого:</TotalMobile>
          <Typography
            variant='h2'
            style={{ fontSize: 21 }}
          >{`${totalPrice} грн`}</Typography>
        </Flex>
        <Button rounded onClick={handleSubmit}>
          ДАЛЬШЕ
        </Button>
      </Flex>
    </MainWrapper>
  );
}
