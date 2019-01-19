import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";
import { HashRouter as Router } from 'react-router-dom';

require("./styles/global.scss");
require("./styles/fonts.scss");
require("../node_modules/react-responsive-carousel/lib/styles/carousel.css");

ReactDOM.render(
    <Router >
        <App />
    </Router>,
    document.getElementById("root")
);