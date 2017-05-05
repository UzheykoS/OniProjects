import * as React from 'react'
import { Nav } from "./Nav";

export class Message extends React.Component<any, any>{
    render() {
        return (
            <div>
                Message {this.props.params.id}
            </div>
        );
    }
};