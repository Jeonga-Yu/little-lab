import { Link } from 'react-router-dom'

function Header (){
    return <div>
        <div>
            <Link to="/login">Login</Link>
        </div>
        <div>
            <Link to="/">Logout</Link>
        </div>
    </div>

}

export default Header;