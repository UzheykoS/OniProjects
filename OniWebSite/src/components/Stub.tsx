import * as React from 'react'
import { Nav } from "./Nav";

export class Stub extends React.Component<any, any>{
    render() {
        return (
            <div>
                <Nav />
                Stub for {this.props.params.id}
            </div>
        );
    }
};