import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";

require("./styles/global.scss");
require("./styles/font.css");

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);