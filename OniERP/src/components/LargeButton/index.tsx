import * as React from 'react'
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import styles from './styles.js';

const LargeButton = (props) => {
    const { classes, component, onClick, title, imageUrl } = props;

    return (
        <div className={classes.root} onClick={onClick}>
            <ButtonBase
                focusRipple
                key={'main'}
                className={classes.image}
                component={component}
                focusVisibleClassName={classes.focusVisible}
                style={{
                    width: '30',
                }}
            >
                <span
                    className={classes.imageSrc}
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                    }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                    <Typography
                        component="span"
                        variant="subheading"
                        color="inherit"
                        className={classes.imageTitle}
                    >
                        {title}
                        <span className={classes.imageMarked} />
                    </Typography>
                </span>
            </ButtonBase>
        </div>
    );
}

export default withStyles(styles)(LargeButton);