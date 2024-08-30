import express from "express"
import {insertDept, listDept} from "./DeptDAO.js"
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());

app.post("/dept", async (req, res)=>{
    console.log("req.body"+JSON.stringify(req.body))
    console.log("req.body.dept"+JSON.stringify(req.body.dept))
    let dept =req.body.dept;
    insertDept(dept)
    res.send("ok")
})

app.get("/dept", async (req, res)=>{
    let list = await listDept();
    console.log(list);
    res.json(list);
});
app.listen(8000,()=>{
    console.log("서버가 가동 되었습니다");
});