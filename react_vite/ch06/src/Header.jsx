import {Link} from 'react-router-dom'

let Header = () => {
    return (
        <>
            <h2>Header</h2>
            <Link to="/">Home</Link>
            <Link to="/info">Info</Link>
            <Link to="/params/1">Param</Link>
        </>
    )
}

export default Header;