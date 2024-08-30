let Child = (props)=>{
    return(
        <>
            <h2>child says : {props.p1}</h2>
            <h2>{props.p2}</h2>
            <h2>{props.person.name}</h2>
            <h2>{props.person.age}</h2>
        </>
    )
}

export default Child2;