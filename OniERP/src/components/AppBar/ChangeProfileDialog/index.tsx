import * as React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import { ProfilesEnum } from '../../../utils/types';
import { Typography } from '@material-ui/core';

export interface IChangeProfileDialogProps {
  profiles?: any;
  currentProfile?: ProfilesEnum;
  open: boolean;
  handleClose: () => void;
  handleProfileChange: (profile: string) => void;
}

export default function ChangeProfileDialog({
  profiles,
  open,
  handleClose,
  currentProfile,
  handleProfileChange,
}: IChangeProfileDialogProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
        classes={{
          paper: 'dialog-wrap',
        }}
      >
        <DialogTitle id='responsive-dialog-title'>
          {'Выберите профиль: '}
        </DialogTitle>
        <DialogContent>
          <MenuList>
            {profiles.map(profile => (
              <MenuItem
                disableGutters
                key={profile.id}
                selected={profile.value === currentProfile}
                onClick={() => handleProfileChange(profile.value)}
              >
                <Avatar className='purple-avatar'>{profile.value[0]}</Avatar>
                <Typography variant='subtitle1'>{profile.value}</Typography>
              </MenuItem>
            ))}
          </MenuList>
        </DialogContent>
      </Dialog>
    </div>
  );
}
