import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBook, FaInfo, FaPowerOff, FaChartLine, FaDollarSign, FaUsers, FaCog } from 'react-icons/fa';

const Sidebar = () => {
    const location = useLocation();

    // Check if the current path is the dashboard or investments page
    const isSidebarVisible = location.pathname === '/dashboard' || location.pathname === '/investments';

    if (!isSidebarVisible) {
        return null; // Render nothing if not on the dashboard or investments page
    }
    return (
        <nav className="main-menu">
            <ul>
                <li>
                    <Link to="/">
                        <FaChartLine className="fa fa-2x" />
                        <span className="nav-text">Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard">
                        <FaDollarSign className="fa fa-2x" />
                        <span className="nav-text">DashBoard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/investments">
                        <FaChartLine className="fa fa-2x" />
                        <span className="nav-text">Statistics</span>
                    </Link>
                </li>
            </ul>   
        </nav>
    );
};

export default Sidebar;