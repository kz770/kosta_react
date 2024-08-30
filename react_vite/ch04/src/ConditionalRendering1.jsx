let ConditionalRendering1 = ()=> {
    let flag = true
    let age=20
    return(
        <>
            <h2>ConditionalRendering1.jsx</h2>
            {flag?<h2>TRUE</h2>:<h2>LIER</h2>}
            {age>20?<h3>Entering</h3>:<h3>You are Prohibited</h3>}
        </>
    )
}

export default ConditionalRendering1