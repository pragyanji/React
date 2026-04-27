import "../css/NavBar.css"

function NavBar(){
    return(
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/age-calculator">Age Calculator</a></li>
                <li><a href="/crude-operations">Crude Operations</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;