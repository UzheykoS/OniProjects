import { Theme } from '@material-ui/core';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import DateTimePickerView, { DateTimePickerViewType } from '../../constants/DateTimePickerView';
export interface DateTimePickerTabsProps extends WithStyles<typeof styles, true> {
    view: DateTimePickerViewType;
    onChange: (view: DateTimePickerView) => void;
    dateRangeIcon: React.ReactNode;
    timeIcon: React.ReactNode;
}
export declare const DateTimePickerTabs: React.SFC<DateTimePickerTabsProps>;
export declare const styles: (theme: Theme) => {
    tabs: {
        color: string;
        backgroundColor: string;
    };
};
declare const _default: React.ComponentType<any>;
export default _default;
