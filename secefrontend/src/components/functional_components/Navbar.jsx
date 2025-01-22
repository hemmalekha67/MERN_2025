import {Link} from 'react-router-dom';
import'../../Css/Navbar.css';
const Navbar=()=>{
    // var styling={
    //     textDecoration:"underline",
    //     color:"black",
    //     listStyleType:"none",
    //     textAlign:"center"
    // }
    return(
        <header>
        <nav>
            <ol>
                <li><Link to='/' className='link'>Home</Link></li>
                <li><Link  to='/About' className='link'>About</Link></li>
                <li><Link to='/Gallery' className='link'>Gallery</Link></li>
                <li><Link to='/Contact' className='link'>Contact</Link></li>
                <li><Link to='/Signup' className='link'>Signup</Link></li>
                <li><Link to='/login' className='link'>Login</Link></li>
            </ol>
        </nav>
        </header>
    )
}
export default Navbar;