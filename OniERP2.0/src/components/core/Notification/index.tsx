import { Component } from 'react';
import * as React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import classNames from 'classnames';
import './styles.scss';

export enum VariantIcon {
  success,
  warning,
  error,
  info,
}

export interface INotificationComponentProps {
  message?: string;
  type?: VariantIcon;

  clearError?: () => void;
}

export interface INotificationComponentState {}

export class NotificationComponent extends Component<
  INotificationComponentProps,
  INotificationComponentState
> {
  getIcon() {
    const { type } = this.props;

    let result;
    switch (type) {
      case VariantIcon.success:
        result = CheckCircleIcon;
        break;
      case VariantIcon.warning:
        result = WarningIcon;
        break;
      case VariantIcon.error:
        result = ErrorIcon;
        break;
      case VariantIcon.info:
      default:
        result = InfoIcon;
        break;
    }

    return result;
  }

  getClass() {
    const { type } = this.props;

    let result;
    switch (type) {
      case VariantIcon.success:
        result = 'success';
        break;
      case VariantIcon.warning:
        result = 'warning';
        break;
      case VariantIcon.error:
        result = 'error';
        break;
      case VariantIcon.info:
      default:
        result = 'info';
        break;
    }

    return result;
  }

  handleClose = () => {
    // this.props.clearError(); TODO
  };

  render() {
    const { message } = this.props;
    const Icon = this.getIcon();

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={!!message}
        autoHideDuration={6000}
        onClose={this.handleClose}
      >
        <SnackbarContent
          className={this.getClass()}
          aria-describedby='client-snackbar'
          message={
            <span id='client-snackbar' className={'message'}>
              <Icon className={classNames('icon', 'icon-variant')} />
              {message}
            </span>
          }
          action={
            <IconButton
              key='close'
              aria-label='Close'
              color='inherit'
              className='notificationClose'
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          }
        />
      </Snackbar>
    );
  }
}

export default NotificationComponent;
