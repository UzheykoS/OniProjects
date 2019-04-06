import * as React from 'react';
import AppBarComponent from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './styles.scss';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { ProfilesEnum } from '../../../utils/types';
import Helper from '../../../utils/helper';
import { Location } from 'history';
import { useStore, useLoader } from '../../../hooks';
import { useObserver } from 'mobx-react-lite';

const options = [
  {
    title: 'Домой',
    route: '/',
  },
  {
    title: 'Розничный заказ',
    route: '/check',
  },
  {
    title: 'Оптовый заказ',
    route: '/partners',
  },
  {
    title: 'Расходы',
    route: '/other',
  },
  {
    title: 'Касса',
    route: '/cashbox',
  },
];

const ITEM_HEIGHT = 48;

export interface IAppBarComponentProps {
  title?: string;
  isSignedIn: boolean | null;

  onLoginClick?: () => void;
  onLogoutClick?: () => void;
  changeProfile?: (profile: string) => void;
  calculateDailyPercent?: () => void;
}

const AppBar: React.FunctionComponent<IAppBarComponentProps> = props => {
  const { title, isSignedIn } = props;
  const [anchorEl, setAnchorEl] = React.useState();
  const [anchorProfileEl, setAnchorProfileEl] = React.useState();

  const { app, router } = useStore();
  app.getDailyBonus();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClick = event => {
    setAnchorProfileEl(event.currentTarget);
  };

  const handleClose = option => {
    const currentRoute =
      router &&
      router.location &&
      router.location.hash &&
      router.location.hash.slice(1);
    if (currentRoute !== option.route) {
      router.push(option.route);
    }
    setAnchorEl(null);
  };

  const handleProfileClose = () => {
    setAnchorProfileEl(null);
  };

  const handleProfileChange = (profile: string) => {
    // changeProfile(profile); TODO
    // calculateDailyPercent();
    setAnchorProfileEl(null);
  };

  const handleLoginClick = () => {
    // const { isSignedIn, onLoginClick, onLogoutClick } = this.props;
    // TODO
    // if (isSignedIn) {
    //     onLogoutClick()
    // } else {
    //     onLoginClick();
    // }
  };

  const renderMenu = () => {
    const open = Boolean(anchorEl);
    const currentRoute =
      router &&
      router.location &&
      router.location.hash &&
      router.location.hash.slice(1);

    return (
      <div>
        <IconButton
          className={'appbar_menuButton'}
          color='inherit'
          aria-label='Menu'
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup='true'
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id='long-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 5.5,
              width: 200,
            },
          }}
        >
          {options.map(option => (
            <MenuItem
              key={option.title}
              selected={option.route === currentRoute}
              onClick={() => handleClose(option)}
            >
              {option.title}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  };

  const renderProfileMenu = () => {
    const open = Boolean(anchorProfileEl);
    const profiles = Helper.getArrayFromEnum(ProfilesEnum);

    return (
      <div>
        <IconButton
          className={'appbar_menuButton'}
          color='inherit'
          aria-label='Menu'
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup='true'
          disabled={!isSignedIn}
          onClick={handleProfileClick}
        >
          <Typography
            variant='subheading'
            color='inherit'
            className={'profile-name'}
          >
            {`Процент:${app.dailyBonus}₴ `}
            <b>{app.currentProfile}</b>
          </Typography>
          <AccountCircleIcon />
        </IconButton>
        <Menu
          id='long-menu'
          anchorEl={anchorProfileEl}
          open={open}
          onClose={handleProfileClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 5.5,
              width: 200,
            },
          }}
        >
          {profiles.map(profile => (
            <MenuItem
              key={profile.id}
              selected={profile.value === app.currentProfile}
              onClick={() => handleProfileChange(profile.value)}
            >
              <AccountCircleIcon className={'profile-name'} />
              {profile.value}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  };

  return useObserver(() => {
    return (
      <div className={'appbar_root'}>
        <AppBarComponent position='static'>
          <Toolbar>
            {renderMenu()}
            <Typography
              variant='title'
              color='inherit'
              className={'appbar_grow'}
            >
              {title}
            </Typography>
            {renderProfileMenu()}
            <Button color='inherit' onClick={handleLoginClick}>
              {isSignedIn ? 'Выйти' : 'Войти'}
            </Button>
          </Toolbar>
        </AppBarComponent>
      </div>
    );
  });
};

export default AppBar;
