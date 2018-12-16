import { Theme } from '@material-ui/core';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import { ToolbarProps } from '@material-ui/core/Toolbar';
import * as React from 'react';
import { ExtendMui } from '../typings/extendMui';
export interface PickerToolbarProps extends ExtendMui<ToolbarProps>, WithStyles<typeof styles> {
    children: React.ReactNodeArray;
}
export declare const styles: (theme: Theme) => Record<"toolbar">;
declare const _default: React.ComponentType<Pick<PickerToolbarProps & {
    children?: React.ReactNode;
}>>;
export default _default;
