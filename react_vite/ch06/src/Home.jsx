import { Link } from 'react-router-dom'

let Home = () => {
    return (
        <>
            <h2>Home.jsx</h2>
            <Link to={{ pathname: '/param/1' }}>Sending Path Variable</Link>

        </>
    )
}

export default Home