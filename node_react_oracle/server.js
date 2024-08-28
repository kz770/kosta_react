// 서버를 만드는데 필요한 모듈을 import
let http=require("http")    // 내부모듈
let express = require("express")


//dao 가져오기
let dao=require("./BookDAO")

// body parser 가져오기
// var bodyParser = require('body-parser')


// express 생성
let app = express()
// body parser 사용
app.use(express.bodyParser())
// app.use(bodyParser.urlencoded({extended: false}));

//정적컨텐츠 어쩌고?? 설명을 못들었다
//정적 컨텐츠(html, script)를 위치시킬 public 폴더 지정?
app.use(express.static('public'))


//사용자의 요청 별 서비스를 위해 router 미들웨어 가져오기
app.use(app.router)


// 요청 method를 정해준다
app.get("/books",async (req, res)=>{
    let bookList=await dao.findAll();
    let list = bookList.map((book)=>{
        return book;
    })
    // for(i in list){
    //     console.log(list[i])
    // }
    res.send(list)
})

app.post("/insert", async(req,res)=>{
    let doc=req.body;
    console.log("req : "+JSON.stringify(req.body))
    console.log("doc : "+doc)    //object 반환
    let bookid=await dao.getNextBookID();
    doc.bookid=bookid;
    console.log("bookid : "+bookid)
    console.log("bookname : "+doc.bookname)
    // let re=await dao.insertBook(doc);
    // res.send(re+"")
})

app.post("/update", async (req,res)=>{
    let doc = req.body;
    console.log(JSON.stringify(doc));
    let re=await dao.updateBook(doc)
    res.send(re+"")
})

app.post("/delete", async (req, res)=>{
    let doc=req.body;
    console.log(JSON.stringify(doc))
    let re=await dao.deleteBook(doc.bookid);
    res.send(re+"")
})


http.createServer(app).listen(52273,()=>{
    console.log("server is running in port 52273")
})

