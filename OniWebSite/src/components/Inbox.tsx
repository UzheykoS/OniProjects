import * as React from 'react'
import { Nav } from "./Nav";

export class Inbox extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                Inbox
                {this.props.children || "Welcome to your Inbox"}
                <Nav />
            </div>
        );
    }
};