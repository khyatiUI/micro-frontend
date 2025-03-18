import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.scss";

const SideMenu: React.FC = () => {
    return (
        <nav className="side-menu">
            <ul>
                <li><Link to="/app1">App 1</Link></li>
                <li><Link to="/app2">App 2</Link></li>
            </ul>
        </nav>
    );
};

export default SideMenu;
