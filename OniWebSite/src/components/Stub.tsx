import * as React from 'react'
import { Nav } from "./Nav";
import { Tabs } from "../Helper"

export class Stub extends React.Component<any, any>{
    render() {
        return (
            <div>
                <Nav tab={this.props.params.id === "Мармелад" ? Tabs.Marmalade : Tabs.Corporate}/>
                Stub for {this.props.params.id}
            </div>
        );
    }
};