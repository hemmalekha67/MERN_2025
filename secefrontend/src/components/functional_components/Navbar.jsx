import'../../Css/Navbar.css';
const Navbar=()=>{
    var styling={
        textDecoration:"underline",
        color:"blue",
        listStyleType:"none",
        textAlign:"center"
    }
    return(
        <header>
        <nav>
            <ol style={styling}>
                <li>Home</li>
                <li>About</li>
                <li>Gallery</li>
                <li>Contact</li>
            </ol>
        </nav>
        </header>
    )
}
export default Navbar;