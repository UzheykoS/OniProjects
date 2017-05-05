import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";
import { About } from "./components/About";
import { Home } from "./components/Home";

require("./styles/global.scss");

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);