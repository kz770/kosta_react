import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookList from './tags/BookList'
// import cors from 'cors'
import axios from 'axios'
//리액트에서 ajax 통신만을 위한 모듈
import Form from './tags/Form'

function App() {
  const [list, setList] = useState([])
  // let list = []
  //useEffect를 사용해서 데이터를 한번만 가져오도록 한다.
  useEffect(()=>{

  },[]) // 뒤에 비어있는 배열을 주어서 최초에 한번만 데이터를 가져오라는 의미
  axios.get("http://localhost:8000/books").then((res)=>{
    // console.log(res.data)
    setList(res.data)
  })

  return (
    <>
      <h2>Library Management System</h2>
      <Form />
      <BookList listData={list} />
    </>
  )
}

export default App
