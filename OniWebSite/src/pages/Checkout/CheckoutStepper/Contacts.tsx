import React from 'react';
import { Typography, InputBaseComponentProps, Grid } from '@material-ui/core';
import {
  FormWrapper,
  MainWrapper,
  TextFieldStyled,
  FormRowWrapper,
  BottomWrapper,
  useStyles,
} from './styled';
import { Button } from '@common/Button';
import { IContactData, IRequiredContactData } from '.';
import PhoneInput from '@common/PhoneInput';
import DatePickerWrapper from '@common/DatePicker';
import TimeInput from '@common/TimeInput';

export const INVALID_NAME = 'Введите Ваше имя';
export const INVALID_PHONE = 'Введите правильный номер телефона';

interface IProps {
  handleContinue: (contactData: IContactData) => void;
}

export function Contacts({ handleContinue }: IProps) {
  const [formData, setFormData] = React.useState<IContactData>({
    name: '',
    phone: '',
    comments: '',
    address: '',
    date: null,
    time: null,
  });
  const classes = useStyles();
  const [formErrors, setFormErrors] = React.useState<IRequiredContactData>({});

  const handleChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
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
    setFormData({ ...formData, date: date?.toISOString() });
  };

  const handleTimeChange = (time: Date | null) => {
    setFormData({ ...formData, time: time?.toISOString() });
  };

  const handleNextClick = () => {
    if (!formData) {
      return;
    }
    handleContinue(formData);
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
        <Grid container spacing={3}>
          <Grid item sm={12} lg={6}>
            <Grid container direction='column'>
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
                fullWidth
              />
              <TextFieldStyled
                label='Телефон'
                value={formData.phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange('phone', e.target.value)
                }
                onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                  handleBlur('phone', e.target.value)
                }
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
                fullWidth
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
                fullWidth
              />
            </Grid>
          </Grid>

          <Grid item sm={12} lg={6}>
            <Grid container direction='column'>
              <Typography variant={'h3'}>АДРЕС ДОСТАВКИ</Typography>
              <FormRowWrapper>
                <DatePickerWrapper
                  variant='inline'
                  emptyLabel='Дата'
                  fullWidth
                  value={formData.date}
                  style={{ margin: '20px 5px 15px 5px' }}
                  handleDateChange={handleDateChange}
                />
                <TimeInput
                  emptyLabel='Время доставки'
                  selectedDate={formData.time}
                  fullWidth
                  variant='inline'
                  style={{ margin: '20px 5px 15px 5px' }}
                  handleDateChange={handleTimeChange}
                />
              </FormRowWrapper>
              <TextFieldStyled
                label='Адрес'
                value={formData.address}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange('address', e.target.value)
                }
                variant='outlined'
                fullWidth
              />
              <Typography variant={'body2'} style={{ marginLeft: 5 }}>
                Если вы выбрали «Самовывоз», адрес указывать не обязательно.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </FormWrapper>
      <BottomWrapper>
        <Button rounded onClick={handleSubmit}>
          ДАЛЬШЕ
        </Button>
      </BottomWrapper>
    </MainWrapper>
  );
}
