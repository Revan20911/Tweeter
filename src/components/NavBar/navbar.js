import "../styles/NavBar/navbar.scss";

import {BsHash, BsHouse, BsBell, BsPerson, BsHouseFill, BsTwitter, BsPencilSquare} from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
const Navbar = ({user, setUser}) => {

    const navigate = useNavigate();

    function logOut(){
        localStorage.clear();

        navigate('/');
        
    }

    function Home(){
        navigate('/home');

    }

    function Profile(){
        navigate('/profile');
    }

    return(
        <div className="nav-wrapper">
            <i className="logo"><BsTwitter size="35" onClick={() => logOut()}/></i>
            <i><BsHouseFill size='30' onClick={() => Home()}/></i>
            <i><BsHash size="35"/></i>
            <i><BsBell size="30"/></i>
            <i><BsPerson size="30" onClick={() => Profile()}/></i>
            
            <i className="compose"><BsPencilSquare size="30"/></i>
        </div>
    )

}

export default Navbar;