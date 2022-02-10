import React from "react";
import './Header.css'

const Header = () => {
    return(
        <div className="header d-inline-flex">
            <h1>Star DB</h1>
            <ul className={'d-inline-flex'}>
                <li>People</li>
                <li>Planet</li>
                <li>Starship</li>
            </ul>
        </div>
    )
};

export default Header;