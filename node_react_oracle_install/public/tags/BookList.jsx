import React from "react"
import BookBody from "./BookHeader"
import BookHeader from "./BookBody"
let BookList = (props) => {
    // let ld = props.listData
    return <table>
        <BookHeader></BookHeader>
        <BookBody listData={props.listData}></BookBody>
    </table>
}

export default BookList;