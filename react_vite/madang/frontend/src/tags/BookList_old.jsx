import BookHeader from "./BookHeader"
import BookBody from "./BookBody"
import { useEffect, useState } from "react"

let BookList = (props) => {
    // let ld = props.listData
    const [list, setList] = useState([]);
    
    useEffect(()=>{
        axios.get("http://localhost:8000/books").then((res)=>{
            // console.log(res.data)
            setList(res.data)
          })
    },[])

    
    return <table>
        <BookHeader></BookHeader>
        <BookBody listData={props.listData}></BookBody>
    </table>
}

export default BookList