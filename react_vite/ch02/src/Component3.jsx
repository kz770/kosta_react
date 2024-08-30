let Component3 = () => {
    let name="spring";
    let student ={
        name:"summer",
        age:29,
        mobile:"010-3792-3921"
    }
    return(
        <>
            <h2>hello</h2>
            <h2>hello {name}</h2>
            <h2>student name : {student.name}</h2>
            <h2>student age : {student.age}</h2>
            <h3>student mobile : {student.mobile} </h3>
        </>
    )
}

export default Component3