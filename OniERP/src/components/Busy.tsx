import { GridLoader } from 'react-spinners';
import * as React from 'react';

export interface IBusyProps {
    loading: boolean
}

export const Busy: React.SFC<IBusyProps> = (props) => {
    return <div className={"busy-container" + (props.loading ? "" : " invisible")}>
        <div className="busy">
            <GridLoader
                color={'#d0006f'}
                loading={props.loading}
            />
        </div>
    </div>;
}