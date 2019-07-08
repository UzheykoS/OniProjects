import * as React from 'react'
import { Component } from 'react';
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
import { ChangeProfile, CalculateDailyPercent, CountDailyDrinks } from '../../actions';

const options = [
    {
        title: 'Домой',
        route: '/'
    },
    {
        title: 'Розничный заказ',
        route: '/check'
    },
    {
        title: 'Оптовый заказ',
        route: '/partners'
    },
    {
        title: 'Расходы',
        route: '/other'
    },
    {
        title: 'Касса',
        route: '/cashbox'
    }
];

const ITEM_HEIGHT = 48;

const mapStateToProps = (state) => {
    return {
        currentProfile: state.currentProfile,
        dailyBonus: state.dailyBonus
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeProfile: (profile: string) => dispatch(ChangeProfile(profile)),
        calculateDailyPercent: () => dispatch(CalculateDailyPercent()),
        countDailyDrinks: () => dispatch(CountDailyDrinks())
    };
};

export interface IAppBarComponentProps {
    classes?: any;
    title?: string;
    isSignedIn?: boolean;
    history?: any;
    currentProfile?: ProfilesEnum;
    dailyBonus?: string;

    onLoginClick?: () => void;
    onLogoutClick?: () => void;
    changeProfile?: (profile: string) => void;
    calculateDailyPercent?: () => void;
    countDailyDrinks?: () => void;
}

export interface IAppBarComponentState {
    anchorEl?: any;
    anchorProfileEl?: any;
}

export class AppBar extends Component<IAppBarComponentProps, IAppBarComponentState>{
    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,
            anchorProfileEl: null
        }
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleProfileClick = event => {
        this.setState({ anchorProfileEl: event.currentTarget });
    };

    handleClose = (option) => {
        const { history } = this.props;
        const currentRoute = location.hash.slice(1);
        if (currentRoute !== option.route) {
            history.push(option.route);
        }

        this.setState({
            anchorEl: null
        });
    };

    handleProfileClose = () => {
        this.setState({
            anchorProfileEl: null
        });
    };

    handleProfileChange = (profile: string) => {
        const { changeProfile, calculateDailyPercent, countDailyDrinks } = this.props;
        changeProfile(profile);
        calculateDailyPercent();
        countDailyDrinks();
        this.setState({
            anchorProfileEl: null
        });
    };

    handleLoginClick = () => {
        const { isSignedIn, onLoginClick, onLogoutClick } = this.props;

        if (isSignedIn) {
            onLogoutClick()
        } else {
            onLoginClick();
        }
    }

    renderMenu() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const currentRoute = location.hash.slice(1);

        return (
            <div>
                <IconButton
                    className={'appbar_menuButton'}
                    color="inherit"
                    aria-label="Menu"
                    aria-owns={open ? 'long-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.handleClose}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 5.5,
                            width: 200
                        }
                    }}
                >
                    {options.map(option => (
                        <MenuItem
                            key={option.title}
                            selected={option.route === currentRoute}
                            onClick={() => this.handleClose(option)}>
                            {option.title}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        );
    }

    renderProfileMenu() {
        const { anchorProfileEl } = this.state;
        const { currentProfile, isSignedIn, dailyBonus } = this.props;

        const open = Boolean(anchorProfileEl);
        const profiles = Helper.getArrayFromEnum(ProfilesEnum);

        return (
            <div>
                <IconButton
                    className={'appbar_menuButton'}
                    color="inherit"
                    aria-label="Menu"
                    aria-owns={open ? 'long-menu' : null}
                    aria-haspopup="true"
                    disabled={!isSignedIn}
                    onClick={this.handleProfileClick}
                >
                    <Typography variant="subheading" color="inherit" className={'profile-name'}>
                        {`Процент:${dailyBonus}₴ `}<b>{currentProfile}</b>
                    </Typography>
                    <AccountCircleIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={anchorProfileEl}
                    open={open}
                    onClose={this.handleProfileClose}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 5.5,
                            width: 200
                        }
                    }}
                >
                    {profiles.map(profile => (
                        <MenuItem
                            key={profile.id}
                            selected={profile.value === currentProfile}
                            onClick={() => this.handleProfileChange(profile.value)}>
                            <AccountCircleIcon className={'profile-name'}/>
                            {profile.value}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        );
    }

    render() {
        const { title, isSignedIn } = this.props;

        return (
            <div className={'appbar_root'}>
                <AppBarComponent position="static">
                    <Toolbar>
                        {this.renderMenu()}
                        <Typography variant="title" color="inherit" className={'appbar_grow'}>
                            {title}
                        </Typography>
                        {this.renderProfileMenu()}
                        <Button color="inherit" onClick={this.handleLoginClick}>{isSignedIn ? 'Выйти' : 'Войти'}</Button>
                    </Toolbar>
                </AppBarComponent>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)
    (AppBar));