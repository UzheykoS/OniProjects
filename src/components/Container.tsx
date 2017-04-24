import * as React from 'react'
import * as ReactDOM from 'react-dom'

const enum Tabs {
    FileImport = 0,
    Mix,
    LineExample,
    BarExample,
    MonthAverage,
    AllMonths,
    MonthHist,
    Map
}

interface IContainerState {
    activeTab?: Tabs;
}

export class Container extends React.Component<IContainerState, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
            </div>
        );
    }
};