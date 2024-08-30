import express from 'express'
import { listBook, insertBook, getNextBookID, updateBook } from './BookDAO.js'
const app = express();

app.use(express.static("public"))
app.use(express.json());

app.get("/books", async (req,res)=>{
    try {
        let listBook = await listBook();
        res.json(list); // 리스트를 클라이언트에 JSON 형식으로 전송
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).send('Internal Server Error'); // 서버 오류
    }
})

//header 정보는 Form.jsx 파일에 존재한다.
app.post("/insert", async (req, res)=> {
    //사용자가 요청한 정보는 req(request)에 실려오므로 이 객체를 이용해 데이터를 받아온다.
    let doc = req.body;
    //여기도 비동기 함수를 사용하므로 await 키워드를 사용한다.
    let bookid = await dao.getNextBookID();
    //bookid 대입
    doc.bookid = bookid;
    //비동기 함수를 사용할 것이므로 await 을 써준다.
    let re = await dao.insertBook(doc);
    res.send(re+"");
});

app.listen(8000, ()=>{
    console.log("서버시작");
});