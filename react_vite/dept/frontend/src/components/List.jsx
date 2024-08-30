import { useEffect, useState } from "react";
import axios from 'axios'

let List=()=>{
    const[deptlist,setDeptlist]=useState([]);
    useEffect(()=>{
        // axios get 요청
        axios.get("http://localhost:8000/dept").then((res)=>{
            //then은 성공했을때 동작하는 콜백함수이다
            console.log(res.data)
            setDeptlist(res.data)   // 
        });
    },[])

    let tr_list = deptlist.map((dept)=>{    //deptlist만큼 동작하는 함수 map
        // node는 속성을 대문자로 응답해준다
        return <tr key={dept.DNO}>
            <td>{dept.DNO}</td>
            <td>{dept.DNAME}</td>
            <td>{dept.DLOC}</td>
        </tr>
    });   
    console.log("tr_list : "+tr_list)

    return <>
        <table>
            <thead>
                <tr>
                    <th>D No</th>
                    <th>D Name</th>
                    <th>D Location</th>
                </tr>
            </thead>
            <tbody>{tr_list}</tbody>
        </table>
    </>
}

export default List