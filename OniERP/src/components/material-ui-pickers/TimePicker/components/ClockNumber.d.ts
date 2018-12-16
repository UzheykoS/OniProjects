import { Theme } from '@material-ui/core';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
export interface ClockNumberProps extends WithStyles<typeof styles> {
    index: number;
    label: string;
    selected: boolean;
    isInner?: boolean;
}
export declare class ClockNumber extends React.Component<ClockNumberProps> {
    static propTypes: any;
    static defaultProps: {
        isInner: boolean;
    };
    getTransformStyle: (index: number) => {
        transform: string;
    };
    render(): JSX.Element;
}
export declare const styles: (theme: Theme) => Record<"selected" | "clockNumber">;
declare const _default: React.ComponentType<any>;
export default _default;
