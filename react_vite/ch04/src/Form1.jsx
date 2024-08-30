import {useState} from "react";

let Form1 = ()=> {
    //변수명, 함수 이름 / 디폴트값
    let [name,setName]=useState("Jane Doh")
    let [age,setAge] = useState(20);
    let inputName=(e)=>{
        console.log(e.target.value)
        setName(e.target.value);
    }
    return (
        <>
            <h2>Form1.jsx</h2>
            <h3>{name}</h3>
            <h3>{age}</h3>
            your name : <input type="text" value={name} onChange={inputName}/>
            <br></br>
            your age : <input type="text" value={age} onChange={(e)=>{
                setAge(e.target.value)
            }}/>
        </>
    )
}

export default Form1;