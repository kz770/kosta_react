import {useParams} from 'react-router-dom'

let Param1 = () => {
    let {id} = useParams();
    return (
        <>
            <h2>Param1.jsx</h2>
            <h3>requested id value : {id}</h3>
        </>
    )
}

export default Param1;