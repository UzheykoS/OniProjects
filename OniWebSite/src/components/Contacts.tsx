import * as React from 'react'
import { Nav } from "./Nav";
import { Tabs } from "../Helper"

export class Contacts extends React.Component<any, any>{
    render() {
        return (
            <div>
                <Nav tab={Tabs.Contacts}/>
                Contacts
            </div>
        );
    }
};