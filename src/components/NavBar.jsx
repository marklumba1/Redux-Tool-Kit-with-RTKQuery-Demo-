import "../assets/styles/navbar/navbar.css"
const NavBar = () => {
    return ( 
        <nav className="navbar-container">
            <h2>[RTK Query Demo]</h2>
            <span className="navbar-links">
                <a href="/">Posts</a>
                <a href="/users">Users</a>
            </span>
        </nav>
     );
}
 
export default NavBar;