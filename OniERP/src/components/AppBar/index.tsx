import * as React from 'react';
import { Component, useState } from 'react';
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
import { withRouter } from 'react-router-dom';
import { ProfilesEnum } from '../../utils/types';
import Helper from '../../utils/helper';
import { connect } from 'react-redux';
import {
  ChangeProfile,
  CalculateDailyPercent,
  CountDailyDrinks,
} from '../../actions';
import Profile from './Profile';
import ChangeProfileDialog from './ChangeProfileDialog';

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

const mapStateToProps = state => {
  return {
    currentProfile: state.currentProfile,
    dailyBonus: state.dailyBonus,
    drinksCount: state.drinksCount,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeProfile: (profile: string) => dispatch(ChangeProfile(profile)),
    calculateDailyPercent: () => dispatch(CalculateDailyPercent()),
    countDailyDrinks: () => dispatch(CountDailyDrinks()),
  };
};

export interface IAppBarComponentProps {
  classes?: any;
  title?: string;
  isSignedIn?: boolean;
  history?: any;
  currentProfile?: ProfilesEnum;
  dailyBonus?: string;
  drinksCount?: number;

  onLoginClick?: () => void;
  onLogoutClick?: () => void;
  changeProfile?: (profile: string) => void;
  calculateDailyPercent?: () => void;
  countDailyDrinks?: () => void;
}

function AppBar({
  history,
  changeProfile,
  calculateDailyPercent,
  countDailyDrinks,
  isSignedIn,
  onLoginClick,
  onLogoutClick,
  title,
  currentProfile,
  dailyBonus,
  drinksCount,
}: IAppBarComponentProps) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorProfileEl, setAnchorProfileEl] = useState(null);
  const [changeProfileDialogOpen, setChangeProfileDialogOpen] = useState(false);
  const [profileDialogOpen, setProfileDialogOpen] = useState(false);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClick = event => {
    setAnchorProfileEl(event.currentTarget);
  };

  const handleClose = option => {
    const currentRoute = location.hash.slice(1);
    if (currentRoute !== option.route) {
      history.push(option.route);
    }

    setAnchorEl(null);
  };

  const handleProfileClose = () => {
    setAnchorProfileEl(null);
  };

  const handleProfileChange = (profile: string) => {
    changeProfile(profile);
    calculateDailyPercent();
    countDailyDrinks();
    setAnchorProfileEl(null);
    setChangeProfileDialogOpen(false);
  };

  const handleLoginClick = () => {
    if (isSignedIn) {
      onLogoutClick();
    } else {
      onLoginClick();
    }
  };

  function handleProfileDialogOpen() {
    setProfileDialogOpen(true);
    setAnchorProfileEl(null);
  }

  function handleProfileDialogClose() {
    setProfileDialogOpen(false);
  }

  const renderMenu = () => {
    const open = Boolean(anchorEl);
    const currentRoute = location.hash.slice(1);

    return (
      <div>
        <IconButton
          className={'appbar_menuButton'}
          color='inherit'
          aria-label='Menu'
          aria-owns={open ? 'long-menu' : null}
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

    if (!isSignedIn) {
      return (
        <Button color='inherit' onClick={handleLoginClick}>
          {'Войти'}
        </Button>
      );
    }
    return (
      <div className='appbar-percent-profile-wrapper'>
        <div>
          <Typography
            variant='subtitle1'
            color='inherit'
            className={'profile-name'}
          >
            {currentProfile}
          </Typography>
          <Typography
            variant='subtitle2'
            color='inherit'
            className={'profile-name'}
          >
            {`Чашек: ${drinksCount} `}
          </Typography>
        </div>
        <Profile
          open={profileDialogOpen}
          currentProfile={currentProfile}
          dailyBonus={dailyBonus}
          drinksCount={drinksCount}
          handleClose={handleProfileDialogClose}
        />
        <IconButton
          className={'appbar_menuButton'}
          color='inherit'
          aria-label='Menu'
          aria-owns={open ? 'long-menu' : null}
          aria-haspopup='true'
          disabled={!isSignedIn}
          onClick={handleProfileClick}
        >
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
          <MenuItem key={'profile'} onClick={handleProfileDialogOpen}>
            Профиль
          </MenuItem>
          <MenuItem
            key={'change_profile'}
            onClick={() => {
              setChangeProfileDialogOpen(true);
              setAnchorProfileEl(null);
            }}
          >
            Сменить профиль
          </MenuItem>
          <MenuItem key={'logout'} onClick={handleLoginClick}>
            {isSignedIn ? 'Выйти' : 'Войти'}
          </MenuItem>
        </Menu>
      </div>
    );
  };

  return (
    <div className={'appbar_root'}>
      <AppBarComponent position='static'>
        <Toolbar>
          {renderMenu()}
          <Typography variant='h6' color='inherit' className={'appbar_grow'}>
            {title}
          </Typography>
          {renderProfileMenu()}
        </Toolbar>
      </AppBarComponent>
      <ChangeProfileDialog
        open={changeProfileDialogOpen}
        profiles={Helper.getArrayFromEnum(ProfilesEnum)}
        currentProfile={currentProfile}
        handleClose={() => setChangeProfileDialogOpen(false)}
        handleProfileChange={handleProfileChange}
      />
    </div>
  );
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppBar)
);
