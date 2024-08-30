import { useState } from 'react';
import axios from 'axios'


let Form = () => {
	const [book, setBook] = useState({
		bookid:"",
		bookname:"",
		price:"",
		publisher:""
	})
	
	const axiosConfig = {
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		}
	}
	
	let bookSave = async (e)=>{
		e.preventDefault(); //기본이벤트를 제거한다.
		await axios.post("http://localhost:8000/books", {book:book}).then(()=>{
			location.reload();
		});
	}


	let inputUpdate = (e)=>{
		const {name, value} = e.target;
		setBook({
			...book,
			[name]:value,
		});
	}


	return (
		<form id="bookForm" onSubmit={bookSave}>
			<input type="hidden" id="bookid" name="bookid" value={book.bookid || ""} onChange={inputUpdate}/>
			<label>도서명</label>
			<input type="text" id="bookname" name="bookname" value={book.bookname || ""} onChange={inputUpdate}/>
			<label>가격</label>
			<input type="text" id="price" name="price" value={book.price || ""} onChange={inputUpdate}/>
			<label>출판사</label>
			<input type="text" id="publisher" name="publisher" value={book.publisher || ""} onChange={inputUpdate}/>
			<input type="submit" value="등록" method="post" />			
		</form>
	);
}


export default Form;
