import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

let Form = () => {
    const navigate = useNavigate(); //리액트에서 사용하는 리다이렉트 기능

    const [dept, setDept] = useState({
        dno: "",
        dname: "",
        dloc: "",
    })

    let inputUpdate = (e) => {
        let { name, value } = e.target;
        setDept({
            ...dept, //일단 기존의 객체로 설정하는 코드
            [name]: value
        });
    }

    let deptSave = async (e) => {
        e.preventDefault()   // 원래 설정된 이벤트를 제거
        console.log("new department :", dept)    // 문자열과 합쳐진 채로 찍으면 object로 찍힌다
        await axios.post("http://localhost:8000/dept", { dept: dept }).then(() => {
            navigate('/')
        })
        
    }



    return (
        <>
            <h2>Registration</h2>

            <form onSubmit={deptSave}>
                <label>Dept No</label>
                <input type="text" name="dno" value={dept.dno || ""} onChange={inputUpdate} />
                <br />
                <label>Dept Name</label>
                <input type="text" name="dname" value={dept.dname || ""} onChange={inputUpdate} />
                <br />
                <label>Dept Location</label>
                <input type="text" name="dloc" value={dept.dloc || ""} onChange={inputUpdate} />
                <br />
                <input type="submit" value={'submit'} />
            </form>
        </>
    )
}

export default Form;