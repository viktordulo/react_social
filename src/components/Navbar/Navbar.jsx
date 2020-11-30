import s from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><a href='/profile' className={s.profile}>Profile</a></li>
                <li><a href='/messages' className={s.messages}>Messages</a></li>
                <li><a href='/news' className={s.news}>News</a></li>
                <li><a href='/music' className={s.music}>Music</a></li>
                <li><a href='/settings' className={s.settings}>Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;