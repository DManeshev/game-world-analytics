import { NavLink } from "react-router-dom";

import './navigation.style.css';

const Navigation = () => {

    return (
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
                <NavLink 
                    to='/playedGame'
                    className={({ isActive }) =>
                        isActive ? 'active' : 'inactive'
                    }>
                    <li className="nav__item">Played Games</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default Navigation;
