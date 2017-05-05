import * as React from 'react'
import { Nav } from "./Nav";

export class Dashboard extends React.Component<any, any>{
    render() {
        return (
            <div>
                Dashboard
                <Nav />
            </div>
        );
    }
};