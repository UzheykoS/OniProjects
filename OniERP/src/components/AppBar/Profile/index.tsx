import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ProfilesEnum } from '../../../utils/types';
import { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export interface IProfileDialogProps {
  open: boolean;
  handleClose: () => void;
  currentProfile?: ProfilesEnum;
  dailyBonus?: string;
  drinksCount?: number;
}

const PASSWORD = '0000';

export default function Profile({
  open,
  handleClose,
  currentProfile,
  dailyBonus,
  drinksCount,
}: IProfileDialogProps) {
  const [authorized, setAuthorized] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [wrongPassword, setWrongPassword] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (!open) {
      setAuthorized(false);
    }
  }, [open]);

  if (!open) {
    return null;
  }

  const changePassword = (value: string) => {
    setPassword(value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(true);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handlePasswordCheck = () => {
    if (password !== PASSWORD) {
      setWrongPassword(true);
    } else {
      setWrongPassword(false);
      setAuthorized(true);
    }
  };
  console.log('authorized', authorized);

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby='responsive-dialog-title'
    >
      {authorized ? (
        <>
          <DialogTitle id='responsive-dialog-title'>
            {'Личный кабинет'}
          </DialogTitle>
          <DialogContent>
            <Typography variant={'subtitle1'}>
              {`Имя: ${currentProfile}`}
            </Typography>
            <Typography variant={'subtitle1'}>
              {`Процент: ${dailyBonus} ₴`}
            </Typography>
            <Typography variant={'subtitle1'}>
              {`Чашек: ${drinksCount} `}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary' autoFocus>
              Готово
            </Button>
          </DialogActions>
        </>
      ) : (
        <>
          <DialogTitle id='responsive-dialog-title'>
            {'Введите ваш пароль'}
          </DialogTitle>
          <DialogContent>
            {wrongPassword && (
              <DialogContentText style={{ color: 'red' }}>
                Введите правильный пароль
              </DialogContentText>
            )}
            <TextField
              variant='outlined'
              label='Имя'
              disabled
              value={currentProfile}
              fullWidth
              margin={'normal'}
            />
            <TextField
              variant='outlined'
              fullWidth
              margin={'normal'}
              type={showPassword ? 'text' : 'password'}
              label='Пароль'
              value={password}
              onChange={ev => changePassword(ev.target.value)}
              inputProps={{
                pattern: '[0-9]*',
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary'>
              Отмена
            </Button>
            <Button onClick={handlePasswordCheck} color='primary' autoFocus>
              Далее
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}
