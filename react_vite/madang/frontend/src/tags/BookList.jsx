import { useEffect, useState } from 'react'
import axios from 'axios'
let BookList = () => {
	const [list, setList] = useState([]);
	useEffect(()=>{
		axios.get("http://localhost:8000/books").then((res)=>{			
			setList(res.data);
		  });  
	},[]);  
	
	let tr_list = list.map((book)=>{
		console.log(book);
		return <tr key={book.BOOKID}>
			<td>{book.BOOKID}</td>
			<td>{book.BOOKNAME}</td>						
			<td>{book.PRICE}</td>						
			<td>{book.PUBLISHER}</td>												
		</tr>;
	});


	let sel = (book) => {
		document.querySelector("#bookid").value = book.BOOKID;
		document.querySelector("#bookname").value = book.BOOKNAME;
		document.querySelector("#price").value = book.PRICE;
		document.querySelector("#publisher").value = book.PUBLISHER;
	}	
	return <table>
				<thead>
					<tr>
						<th>도서번호</th>
						<th>도서명</th>
						<th>가격</th>
						<th>출판사</th>
					</tr>
				</thead>
				<tbody>{tr_list}</tbody>				
	</table>
}


export default BookList;
