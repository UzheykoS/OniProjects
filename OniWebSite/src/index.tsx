declare var require: any;

require("./styles/global.scss");
require("./styles/fonts.scss");
require("../node_modules/react-responsive-carousel/lib/styles/carousel.css")

import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router >
        <App />
    </Router>,
    document.getElementById("root")
);