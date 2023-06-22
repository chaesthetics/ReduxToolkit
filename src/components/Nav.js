import React from "react";
function Nav(){

    
    return(
        
        <nav className="navBar">
            <div className="navContainer">
            <div className="logo">Auriel.</div>
            <div className="navItems">
                <ul className="youEl">
                    <li className="navLi">About</li>
                    <li className="navLi">Skills</li>
                    <li className="navLi">Certificates</li>
                    <li className="navLi">Contact</li>
                    <li className="navR"><button className="navB">Resume</button></li>
                </ul>
            </div>
            </div>
        </nav>
    )
}


export default Nav