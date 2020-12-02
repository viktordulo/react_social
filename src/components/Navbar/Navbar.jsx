import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><NavLink to='/profile' className={s.profile} activeClassName={s.active}>Profile</NavLink></li>
                <li><NavLink to='/messages' className={s.messages} activeClassName={s.active}>Messages</NavLink></li>
                <li><NavLink to='/news' className={s.news} activeClassName={s.active}>News</NavLink></li>
                <li><NavLink to='/music' className={s.music} activeClassName={s.active}>Music</NavLink></li>
                <li><NavLink to='/settings' className={s.settings} activeClassName={s.active}>Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;