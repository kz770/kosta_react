let BookBody = (props) => {
    let sel = (book) => {
        // console.log(book);
        document.querySelector("#bookid").value = book.bookid;
        document.querySelector("#bookname").value = book.bookname;
        document.querySelector("#publisher").value = book.publisher;
        document.querySelector("#price").value = book.price;
    }

    let rows = props.listData.map((book) => {
        return <tr onClick={() => sel(book)}>
            <td>{book.bookid}</td>
            <td>{book.bookname}</td>
            <td>{book.price}</td>
            <td>{book.publisher}</td>
        </tr>
    })
    return <tbody>{rows}</tbody>
}