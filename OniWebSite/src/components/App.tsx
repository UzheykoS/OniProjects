import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Nav } from "./Nav";
// require("file-loader!../images/banner.jpg");
require("../images/banner.jpg");

export class App extends React.Component<any, any>{
    render() {
        return <div className="app">
            APP
             <Nav />
            <span>Site maintenance</span>
        </div>;
    }
};