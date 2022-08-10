import { NavLink } from "react-router-dom";

import Logo from "../ui/heading/Logo";

import './navigation.style.css';

const Navigation = () => {

    return (
        <header className="header">
            <Logo />
            <nav className="nav">
                <ul className="nav__list">
                    <NavLink 
                        to='/'
                        className={({ isActive }) =>
                            isActive ? 'active' : 'inactive'
                        }>
                        <li className="nav__item">Home</li>
                    </NavLink>
                    <NavLink 
                        to='/statistics'
                        className={({ isActive }) =>
                            isActive ? 'active' : 'inactive'
                        }>
                        <li className="nav__item">Statistics</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;
