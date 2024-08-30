import { useState } from "react"

let ConditionalRendering2 = ()=> {
    let [isLogin, setIsLogin] = useState(false);
    return(
        <>
            <h2>ConditionalRendering1.jsx</h2>
            <button onClick={()=>setIsLogin(!isLogin)}>{isLogin?good:bad}</button>
        </>
    )
}

export default ConditionalRendering2