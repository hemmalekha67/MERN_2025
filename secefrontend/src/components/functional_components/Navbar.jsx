
import { useState } from 'react';
import { Link } from 'react-router-dom';
import'../../Css/Navbar.css';
const Navbar=()=>{
    var [dropdown,showDropdown]=useState(false)
    const toggleDropdown=()=>{
        showDropdown(dropdown=>!dropdown)
        
    }
    return(
        <header>
        <nav>
            <ol>
                <li><Link to='/' className="link">Home</Link></li>
                <li><Link to='/About' className="link">About</Link></li>
                <li><Link to='/Gallery' className="link">Gallery</Link></li>
                <li><Link to='/Contact' className="link">Contact</Link></li>
                <div onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} style={{ position: 'relative', display: 'inline-block' }}>
                        <span>Hooks</span>
                        {dropdown && (
                            <ul style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                listStyle: 'none',
                                margin: 0,
                                padding: '10px',
                                color:'black',

                                backgroundColor:' rgb(243, 177, 250)',
                                boxShadow: '0px 4px 6px rgb(243, 177, 250)',
                                borderRadius: '5px',
                                zIndex: 1,
                            }}>
                         <li><Link to='/ReactLifecycleMethods' className='link'>LifeCyle</Link></li>       
                       <li><Link to='/useState' className='link'>useState</Link></li>
                        <li><Link to='/useEffect' className='link'>useEffect</Link></li>
                        <li><Link to='' className='link'>UseEffectAPI</Link></li>
                        <li><Link to='/UseEffectAPIimage' className='link'>useEffectAPIImage</Link></li>
                        <li><Link to='/UseReducer' className='link'>useReducer</Link></li>
                        <li><Link to='/UseRef' className='link'>Useref</Link></li>
                        <li><Link to='/UseMemo' className='link'>UseMemo</Link></li>
                        <li><Link to='/Usecallback' className='link'>UseCallback</Link></li>
                    </ul>)}
                </div>
                <li><Link to='/Signup 'className="link">SignUp</Link></li>
                <li><Link to='/login 'className="link">Login</Link></li>

            </ol>
        </nav>
        </header>
    )
}
export default Navbar;