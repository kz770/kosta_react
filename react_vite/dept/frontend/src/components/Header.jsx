import {Link} from 'react-router-dom'

const Header = () => {
    return(
    <>
        <div className='header'>
            <Link to='/save'>Registration</Link>
            <Link to='/'>Department List</Link>
        </div>
    </>)
}

export default Header