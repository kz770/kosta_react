import { useState } from "react";

let Form2 = () => {
    let [member,setMember] = useState({
        name:"summer",
        age : 20,
        email:"summer99@gmail.com"
    })

    let inputUpdate = (e)=>{
        let {name, value}=e.target
        setMember({
            ...member,
            [name]:value,
        })
    }


    return (
        <>
            <h2>Registration</h2>
            <p>name : {member.name}</p>
            <p>age : {member.age}</p>
            <p>email : {member.member}</p>
            name : <input type="text" name ="name" value={member.name} onChange={inputUpdate}></input><br/>
            age : <input type="text" name ="age" value={member.age} onChange={inputUpdate}></input><br/>
            email : <input type="text" name ="email" value={member.email} onChange={inputUpdate}></input><br/>
        </>
    )
}

export default Form2