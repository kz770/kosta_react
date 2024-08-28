import React from "react";
let BookBody = (props) => {
    let sel = (book) => {
        // console.log(book);
        document.querySelector("#bookid").value = book.BOOKID;
        document.querySelector("#bookname").value = book.BOOKNAME;
        document.querySelector("#publisher").value = book.PUBLISHER;
        document.querySelector("#price").value = book.PRICE;
    }

    let rows = props.listData.map((book) => {
        return <tr onClick={() => sel(book)}>
            <td>{book.BOOKID}</td>
            <td>{book.BOOKNAME}</td>
            <td>{book.PRICE}</td>
            <td>{book.PUBLISHER}</td>
        </tr>
    })
    return <tbody>{rows}</tbody>
}