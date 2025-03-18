import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/global.scss";

const SideMenu: React.FC = () => {
    const location = useLocation();

    return (
        <nav className="side-menu">
            <ul>
                <li className={location.pathname === "/app1" ? "selected" : ""}>
                    <Link to="/app1">App 1</Link>
                </li>
                <li className={location.pathname === "/app2" ? "selected" : ""}>
                    <Link to="/app2">App 2</Link>
                </li>
            </ul>
        </nav>
    );
};

export default SideMenu;
