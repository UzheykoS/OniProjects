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
} from './styled';
import { Button } from '@common/Button';
import { IContactData, IRequiredContactData } from '.';
import PhoneInput from '@common/PhoneInput';
import DatePickerWrapper from '@common/DatePicker';
import { Flex } from '@styles/styled';
import { BREAKPOINT } from '@constants';
import { DeliveryType } from './Delivery';
import { TextLink } from '@common/styled';

export const INVALID_NAME = 'Введите имя';
export const INVALID_SURNAME = 'Введите фамилию';
export const INVALID_PHONE = 'Введите правильный номер телефона';
export const INVALID_ADDRESS = 'Введите адрес';
export const INVALID_CITY = 'Введите город';
export const INVALID_DATE = 'Введите дату';
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
    if (key === 'address' && delivery !== DeliveryType.SelfService) {
      setFormErrors({
        ...formErrors,
        address: value ? undefined : INVALID_ADDRESS,
      });
    }
    if (delivery === DeliveryType.NP && key === 'surname') {
      setFormErrors({
        ...formErrors,
        surname: value ? undefined : INVALID_SURNAME,
      });
    }
    if (delivery === DeliveryType.NP && key === 'city') {
      setFormErrors({ ...formErrors, city: value ? undefined : INVALID_CITY });
    }
    if (key === 'date') {
      setFormErrors({ ...formErrors, date: value ? undefined : INVALID_DATE });
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
      delivery === DeliveryType.SelfService || formData.address
        ? undefined
        : INVALID_ADDRESS;
    errors.surname =
      delivery !== DeliveryType.NP || formData.surname
        ? undefined
        : INVALID_SURNAME;
    errors.city =
      delivery !== DeliveryType.NP || formData.city ? undefined : INVALID_CITY;
    errors.date = formData.date ? undefined : INVALID_DATE;

    setFormErrors(errors);

    if (Object.values(errors).filter(Boolean).length) {
      return;
    } else {
      handleNextClick();
    }
  }

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return (
    <MainWrapper>
      <FormWrapper noValidate autoComplete='on'>
        <Flex style={{ width: '100%' }} direction={isMobile ? 'column' : 'row'}>
          <Flex
            direction='column'
            style={{
              width: isMobile ? '100%' : '50%',
              margin: isMobile ? '15px 5px 0 5px' : '15px 5px 10px 5px',
            }}
          >
            <Typography variant={'h3'} style={{ marginBottom: '10px' }}>
              КОНТАКТНЫЕ ДАННЫЕ
            </Typography>
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
              error={!!formErrors.name}
              helperText={!!formErrors.name ? formErrors.name : ' '}
            />
            {delivery === DeliveryType.NP && (
              <TextFieldStyled
                label='Фамилия'
                name='surname'
                value={formData.surname}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange('surname', e.target.value)
                }
                onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                  handleBlur('surname', e.target.value)
                }
                variant='outlined'
                required
                error={!!formErrors.surname}
                helperText={!!formErrors.surname ? formErrors.surname : ' '}
              />
            )}
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
              error={!!formErrors.phone}
              helperText={!!formErrors.phone ? formErrors.phone : ' '}
            />
            {delivery !== DeliveryType.NP && (
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
            )}
          </Flex>

          <Flex
            direction='column'
            style={{
              width: isMobile ? '100%' : '50%',
              margin: isMobile ? '0px 5px 15px 5px' : '25px 5px 10px 5px',
            }}
          >
            <FormRowWrapper style={{ marginTop: isMobile ? 0 : 18 }}>
              <DatePickerWrapper
                variant={isMobile ? 'dialog' : 'inline'}
                label={delivery === DeliveryType.NP ? 'Дата отправки' : 'Дата'}
                value={formData.date}
                style={{ margin: '2px 5px', width: '100%' }}
                onChange={handleDateChange}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                  handleBlur('date', e.target.value)
                }
                required
                minDate={
                  delivery === DeliveryType.Delivery ? tomorrow : new Date()
                }
                error={!!formErrors.date}
                helperText={!!formErrors.date ? formErrors.date : ' '}
              />
              {delivery !== DeliveryType.NP && (
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
              )}
              {delivery === DeliveryType.NP && (
                <TextFieldStyled
                  label='Город'
                  name='city'
                  value={formData.city}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange('city', e.target.value)
                  }
                  onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                    handleBlur('city', e.target.value)
                  }
                  variant='outlined'
                  required
                  fullWidth
                  error={!!formErrors.city}
                  helperText={!!formErrors.city ? formErrors.city : ' '}
                />
              )}
            </FormRowWrapper>
            <TextFieldStyled
              label={delivery === DeliveryType.NP ? 'Отделение/Адрес' : 'Адрес'}
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
              required={delivery !== DeliveryType.SelfService}
              error={!!formErrors.address}
              helperText={!!formErrors.address ? formErrors.address : ' '}
            />
            {delivery === DeliveryType.NP && (
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
            )}
          </Flex>
        </Flex>
      </FormWrapper>
      <Typography variant={'body2'} style={{ margin: '0px 0px 10px 10px' }}>
        * Обязательное поле
      </Typography>
      <Flex justifyBetween>
        <TextLink
          style={{
            textTransform: 'uppercase',
            fontWeight: 'bold',
            color: '#1E2F42',
            marginRight: 40,
            opacity: 1,
            letterSpacing: '3px',
            alignSelf: 'center',
          }}
          tabIndex={0}
          onClick={handleBackClick}
        >
          вернуться к доставке
        </TextLink>
        <Button rounded small={isMobile} onClick={handleSubmit}>
          ДАЛЬШЕ
        </Button>
      </Flex>
    </MainWrapper>
  );
}
