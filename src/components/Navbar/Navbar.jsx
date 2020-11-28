import s from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><a href='#' className={s.profile}>Profile</a></li>
                <li><a href='#' className={s.messages}>Messages</a></li>
                <li><a href='#' className={s.news}>News</a></li>
                <li><a href='#' className={s.music}>Music</a></li>
                <li><a href='#' className={s.settings}>Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;