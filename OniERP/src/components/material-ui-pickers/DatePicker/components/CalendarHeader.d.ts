import { Theme } from '@material-ui/core';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import { WithUtilsProps } from '../../_shared/WithUtils';
import { MaterialUiPickersDate } from '../../typings/date';
import { SlideDirection } from './SlideTransition';
export interface CalendarHeaderProps extends WithUtilsProps, WithStyles<typeof styles, true> {
    currentMonth: object;
    onMonthChange: (date: MaterialUiPickersDate, direction: SlideDirection) => void;
    leftArrowIcon?: React.ReactNode;
    rightArrowIcon?: React.ReactNode;
    disablePrevMonth?: boolean;
    disableNextMonth?: boolean;
    slideDirection: SlideDirection;
}
export declare const CalendarHeader: React.SFC<CalendarHeaderProps>;
export declare const styles: (theme: Theme) => Record<any>;
export default _default;
