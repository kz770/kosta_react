import express from 'express'
import { listDept } from './DeptDAO'
import cors from 'cors'
// 외부 서버로부터 ajax 통신을 자유롭게 가능하도록 한다.

const app = express();
app.use(cors()) //외부로부터 access 가능하도록 설정
app.use(express.json()) //json으로 데이터를 주고받도록 설정

app.get('/dept', (req, res)=>{
    let list=[];
})

app.listen(8000,()=>{
    console.log("server in running on port 8000!")
})