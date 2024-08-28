import React from "react";
import ReactDOM from "react-dom";
import axios from "axios"
import * as Babel from "@babel/standalone"

import App from "./tags/App"

axios.get("/books").then((res) => {
    console.log("OK")
    let list = res.data;
})
ReactDOM.render(
    <App listData={list} />
    , document.getElementById("root"))