import "./navbar.css"
import cart from "../assets/cart.png"
import search from "../assets/searchIcon.png"
import profile from "../assets/profile.png"

const Navbar = () => {
    return ( 
        <nav className="navbaritems">
            <h1 className="companyName">Swift</h1>
            <div className="links">
                <ul className="nav-menu">
                    <li> <a className="nav-link" href="/">Home</a> </li>
                    <img src={profile} alt="profile" className="profile" />
                    <img src={search} alt="search" className="search" />
                    <img src={cart} alt="cart" className="cart" />
                </ul>

            </div>
        </nav>
     );
}
 
export default Navbar;