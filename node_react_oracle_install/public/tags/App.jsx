import React from "react";
import BookList from "./BookList"
import Form from "./Form"
let App = (props) => {
    let list = props.listData;
    return (
        <div>
            <Form/>
            <hr/>
            <BookList listData={list}/>
        </div>
    )
} // end App
export default App;