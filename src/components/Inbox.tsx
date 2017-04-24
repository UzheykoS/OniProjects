import * as React from 'react'
import { Nav } from "./Nav";

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

interface IInboxState {
    activeTab?: Tabs;
}

export class Inbox extends React.Component<IInboxState, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Inbox</h2>
                {this.props.children || "Welcome to your Inbox"}
                <Nav />
            </div>
        );
    }
};