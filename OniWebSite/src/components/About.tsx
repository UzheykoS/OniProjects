import * as React from 'react'
import { Nav } from "./Nav";
import { Tabs } from "../Helper"

export class About extends React.Component<any, any>{
    render() {
        return (
            <div>
                About
                <Nav tab={Tabs.About}/>
            </div>
        );
    }
};