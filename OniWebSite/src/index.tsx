declare var require: any;

require("./styles/global.scss");
require("./styles/fonts.scss");

require("./images/cite_1920.png");
require("./images/cite_1920_v2.png");
require("./images/cite_680.png");
require("./images/favicon.png");
require("./images/icons/Oni_logo.png");
require("./images/icons/Oni_w_black.png");
require("./images/icons/Oni_w_black.svg");
require("./images/icons/facebook.png");
require("./images/icons/instagram.png");
require("./images/icons/twitter.png");

require("./images/images_large/cakes/cake1_a.jpg");
require("./images/images_large/cakes/cake2_a.jpg");
require("./images/images_large/cakes/cake3_a.jpg");
require("./images/images_large/cakes/cake4_a.jpg");
require("./images/images_large/cakes/cake5_a.jpg");

require("./images/images_large/cakes/cake1_b.jpg");
require("./images/images_large/cakes/cake2_b.jpg");
require("./images/images_large/cakes/cake3_b.jpg");
require("./images/images_large/cakes/cake4_b.jpg");
require("./images/images_large/cakes/cake5_b.jpg");

require("./images/images_large/macarons/mac1_a.jpg");
require("./images/images_large/macarons/mac2_a.jpg");
require("./images/images_large/macarons/mac3_a.jpg");
require("./images/images_large/macarons/mac4_a.jpg");
require("./images/images_large/macarons/mac5_a.jpg");
require("./images/images_large/macarons/mac6_a.jpg");
require("./images/images_large/macarons/mac7_a.jpg");
require("./images/images_large/macarons/mac8_a.jpg");


require("./images/images_large/macarons/mac_large.png");
require("./images/images_large/macarons/mac_small.png");

require("../node_modules/react-responsive-carousel/lib/styles/carousel.css")

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