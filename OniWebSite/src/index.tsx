declare var require: any;

require("./styles/global.scss");
require("./styles/fonts.scss");

require("./images/cite_1920.png");
require("./images/cite_1920_v2.png");
require("./images/cite_680.png");
require("./images/favicon.png");
require("./images/logo.png");
require("./images/facebook.png");
require("./images/instagram.png");
require("./images/telegram.png");

import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
import { Router, Route, IndexRoute, IndexRedirect, Redirect, browserHistory, hashHistory } from 'react-router';

import { Cakes } from "./components/Cakes";
import { Macaroons } from "./components/Macaroons";
import { About } from "./components/About";
import { Contacts } from "./components/Contacts";
import { Stub } from "./components/Stub";

ReactDOM.render(
    <Router history={hashHistory}>
        <Route exact path="/" component={App} />
        <Route path="about" component={About} />
        <Route path="cakes" component={Cakes}/>
        <Route path="macaroons" component={Macaroons} />
        <Route path="stub/:id" component={Stub} />
        <Route path="contacts" component={Contacts} />
    </Router>,
    document.getElementById("root")
);