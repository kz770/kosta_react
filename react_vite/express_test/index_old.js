import express from "express"

const app = express()

//미들웨어 설정
app.use(express.static("public"))
app.use(express.json());

app.post("/member", (req, res)=>{
    console.log(req.body)
    // let {name, age}=req.body
    // console.log(`name:${name}, age:${age}`)
    res.send("ok")
})

app.post("/hello",(req, res)=>{
    console.log("post method request")
    res.send("ok")
})

app.get("/", (req, res)=>{
    console.log("default addr");
})

app.get("/hello", ()=>{
    console.log("requesting hello")
})

// app.get("/:id", (req)=>{
//     console.log(req.params)
//     const { id } = req.params
//     console.log(id)
// })

app.get("/qs", (req)=>{
    console.log(req.query)
    const { p1, p2 } = req.query;
    console.log(`p1:${p1}, p1:${p2}`)
})

app.listen(8000,()=>{
    console.log("server in running on port 8000!!")
})