import "./navbar.css";
import { CardWidget } from '../CardWidget/CardWidget';
import logo from '../images/Vinos.jpg';


export const NavBar = () => {
    return <header className="header">
        <img src={ logo } className="logo" alt="logo" />

        <nav className="navbar">
        <a href="/" className="WhinesNav" >Whines</a>
        <a href="/" className="WhinesNav" >History</a>
        <a href="/" className="WhinesNav" >Subscribe</a>
        </nav>
       
        < CardWidget />
        
    </header>
}

