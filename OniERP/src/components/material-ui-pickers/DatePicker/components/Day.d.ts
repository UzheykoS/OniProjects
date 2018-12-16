import { Theme } from '@material-ui/core';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
export interface DayProps extends WithStyles<typeof styles> {
    children: React.ReactNode;
    current?: boolean;
    disabled?: boolean;
    hidden?: boolean;
    selected?: boolean;
}
export declare const styles: (theme: Theme) => Record<any>;
export default _default;
