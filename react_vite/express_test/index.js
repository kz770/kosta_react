import express from 'express';
import { listBook, insertBook, getNextBookID,updateBook, deleteBook } from './BookDAO.js';
const app = express();
app.use(express.static("public"));
app.use(express.json());

app.delete("/delete", async(req, res)=>{
    let doc=req.body;
    let re=await deleteBook(doc.bookid);
    res.send(re+"")
})

app.put("/books", async(req, res)=>{
    let doc=req.body
    console.log(doc)
})

app.post("/books", async (req,res)=>{
    let doc = req.body;
    let bookid = await getNextBookID();    
    doc.bookid = bookid;
    let re = await insertBook(doc);    
    console.log("re:"+re);
    res.send(re+"");
});

app.get("/books", async (req, res) => {
    try {
        let list = await listBook();
        res.json(list); // 리스트를 클라이언트에 JSON 형식으로 전송
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).send('Internal Server Error'); // 서버 오류 응답
    }
});

app.listen(8000, () => {
    console.log("서버 시작");
});
