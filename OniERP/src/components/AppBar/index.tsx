import * as React from 'react'
import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBarComponent from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './styles.scss';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withRouter } from 'react-router-dom';

const options = [
    {
        title: 'Домой',
        route: '/'
    },
    {
        title: 'Test',
        route: '/test'
    }
];

const ITEM_HEIGHT = 48;

export interface IAppBarComponentProps {
    classes?: any;
    title?: string;
    isSignedIn?: boolean;
    history?: any;

    onLoginClick?: () => void;
    onLogoutClick?: () => void;
}

export interface IAppBarComponentState {
    anchorEl?: any;
}

export class AppBar extends Component<IAppBarComponentProps, IAppBarComponentState>{
    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null
        }
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
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
                            maxHeight: ITEM_HEIGHT * 4.5,
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
                        <Button color="inherit" onClick={this.handleLoginClick}>{isSignedIn ? 'Выйти' : 'Войти'}</Button>
                    </Toolbar>
                </AppBarComponent>
            </div>
        );
    }
}

export default withRouter(AppBar);