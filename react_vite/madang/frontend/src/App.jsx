
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./tags/BookList"
import BookList from './tags/BookList'
import Form from "./tags/Form"

//ajax 통신하기 위해 아래 import

import axios from "axios"
//리액트에서 Ajax 통신만을 위한 모듈

function App() { return (  
    <>
      <h2>도서관리 시스템</h2>
      <Form />
      <BookList/>
    </>
  )
}

export default App