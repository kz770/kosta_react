let Child = ({p1, p2, person})=>{
    return(
        <>
            <h2>child says : {p1}</h2>
            <h2>{p1}</h2>
            <h2>{p2}</h2>
            <h2>{person.name}</h2>
            <h2>{person.age}</h2>
        </>
    )
}

export default Child;