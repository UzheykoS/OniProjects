import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  modal: {
    width: '100%',
    padding: '25px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 500,
    padding: '24px 24px 16px 24px',
    alignSelf: 'center',
  },
  content: {
    overflow: 'hidden',
  },
  saveBtn: {
    order: 1,
  },
  dialogActionsWrapper: {
    justifyContent: 'space-around',
    marginTop: '10px',
  },
  closeIconWrapper: {
    position: 'absolute',
    right: '10px',
    top: '25px',
  },
});
