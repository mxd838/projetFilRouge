import NavItem from "../navitem/NavItem";
import "./NavBar.css";

function Navbar() {
    return(
        <ul>
            <NavItem direction="/" text="Accueil" />
            <NavItem direction="/hearts" text="Coups de coeur" />
            <NavItem direction="/levels" text="Paliers" />
      </ul>
    );

}

export default Navbar;