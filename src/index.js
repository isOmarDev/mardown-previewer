import React from "react";
import ReactDom from "react-dom";

import {ContextProvider} from "./Context"

import "main.css"
import App from "./App"

ReactDom.render(
    <ContextProvider>
        <App />
    </ContextProvider>, 
    document.getElementById('root')
)
