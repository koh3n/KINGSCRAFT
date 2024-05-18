
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-inner">
                <a href="#" className="nav-link">
                    Home
                </a>
                <a href="#" className="nav-link">
                    About
                </a>
                <div className="logo">
                    KINGS CRAFT
                </div>
                <a href="#" className="nav-link">
                    Services
                </a>
                <a href="#" className="nav-link">
                    Contact
                </a>
            </div>
        </div>
    );
}

export default Navbar;