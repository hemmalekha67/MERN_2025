import {useState} from 'react';
import {Link} from 'react-router-dom';
import'../../Css/Navbar.css';
const Navbar=()=>{
    var [dropdown,showDropdown]= useState(false)
    const toggleDropdown=()=>{
        showDropdown(dropdown=>!dropdown)
    }
    return(
        <header>
        <nav>
            <ol>
                <li><Link to='/' className='link'>Home</Link></li>
                <li><Link  to='/About' className='link'>About</Link></li>
                <li><Link to='/Gallery' className='link'>Gallery</Link></li>
                <li><Link to='/Contact' className='link'>Contact</Link></li>
                <div>
                    <span onMouseEnter={toggleDropdown} >Hooks</span>
                    {dropdown &&(
                        <ul>
                        <li><Link to='/useState' className='link'>useState</Link></li>
                        <li><Link to='useEffect' className='link'>useEffect</Link></li>
                    </ul>
                    )}
                    
                </div>
                <li><Link to='/Signup' className='link'>Signup</Link></li>
                <li><Link to='/login' className='link'>Login</Link></li>
                <li><Link to='UseEffectAPI' className='link'>UseEffectAPI</Link></li>

            </ol>
        </nav>
        </header>
    )
}
export default Navbar;