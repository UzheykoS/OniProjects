import * as React from "react";
import * as ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { App } from "./components/App";

import * as injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

require("./styles/global.scss");
require("./styles/font.css");

const AppWrapper = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
    <AppWrapper/>,
    document.getElementById("root")
);