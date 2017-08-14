declare var require: any;

require("babel-polyfill");

require("./styles/global.scss");
require("./styles/fonts.scss");

require("./images/favicon.png");
require("./images/icons/Oni_logo.png");
require("./images/icons/Oni_w_black.png");
require("./images/icons/facebook.png");
require("./images/icons/instagram.png");
require("./images/icons/twitter.png");

require("./images/images_large/cakes/cake1.jpg");
require("./images/images_large/cakes/cake2.jpg");
require("./images/images_large/cakes/cake3.jpg");
require("./images/images_large/cakes/cake4.jpg");
require("./images/images_large/cakes/cake5.jpg");

require("./images/images_large/cakes/cut1.jpg");
require("./images/images_large/cakes/cut2.jpg");
require("./images/images_large/cakes/cut3.jpg");
require("./images/images_large/cakes/cut4.jpg");
require("./images/images_large/cakes/cut5.jpg");

require("./images/images_large/macarons/macaron1.jpg");
require("./images/images_large/macarons/macaron2.jpg");
require("./images/images_large/macarons/macaron3.jpg");
require("./images/images_large/macarons/macaron4.jpg");
require("./images/images_large/macarons/macaron5.jpg");
require("./images/images_large/macarons/macaron6.jpg");
require("./images/images_large/macarons/macaron7.jpg");
require("./images/images_large/macarons/macaron8.jpg");

require("./images/images_large/macarons/mac_large.png");
require("./images/images_large/macarons/mac_small.png");

require("../node_modules/react-responsive-carousel/lib/styles/carousel.css")

import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";

ReactDOM.render(
    <App />,
    document.getElementById("root")
);