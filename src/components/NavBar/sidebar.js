import "../styles/NavBar/navbar.scss"





const Sidebar = () => {

    return(

        <div className="nav-wrapper">
            <h3>Built With</h3>
            <span className="icons"><img id="react"src="./logo512.png"></img></span>
            <span  className="icons"><img id="sass" src="./sass.png"></img></span>
            <span className="icons"><img id="sass"src="./node.png"></img></span>
            <span className="icons"><img id="sass"src="./mongo.png"></img></span>

        </div>



    )

}

export default Sidebar;