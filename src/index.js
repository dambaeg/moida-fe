import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<div />, document.getElementById("root"));

serviceWorker.register();
