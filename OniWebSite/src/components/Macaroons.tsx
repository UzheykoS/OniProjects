import * as React from 'react'
import { Nav } from "./Nav";

export class Macaroons extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>                
                <Nav />
                <span>Macaroons</span>
                {this.props.children || "Welcome to your Inbox"}
            </div>
        );
    }
};