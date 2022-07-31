import { Link } from "react-router-dom"

const NavItem = ({direction, text} : any) => {
    return (
        <li>
            <Link to={direction}>{text}</Link>
        </li>
    )
}


export default NavItem