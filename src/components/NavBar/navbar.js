import "../styles/NavBar/navbar.scss";

import {BsHash, BsHouse, BsBell, BsPerson, BsHouseFill, BsTwitter, BsPencilSquare} from 'react-icons/bs';
const Navbar = ({user, setUser}) => {

    return(
        <div className="nav-wrapper">
            <i className="logo"><BsTwitter size="35"/></i>
            <i><BsHouseFill size='30'/></i>
            <i><BsHash size="35"/></i>
            <i><BsBell size="30"/></i>
            <i><BsPerson size="30"/></i>
            
            <i className="compose"><BsPencilSquare size="30"/></i>
        </div>
    )

}

export default Navbar;