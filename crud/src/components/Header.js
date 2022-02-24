import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from './Header.css'

function HeaderComponent() {
    const [activeTab, setActiveTab] = useState('Home');
    return (
        <div className="container">
            <ul className="customMenu">
                <li>
                    <Link to="/home">
                        <p className={`${activeTab} === 'Home' ? 'active' : ''`}
                            onClick={() => setActiveTab('Home')}>
                            Home
                        </p>
                    </Link>
                </li>
            </ul>
        </div>
    )    
}

export default HeaderComponent;
