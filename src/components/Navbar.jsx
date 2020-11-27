import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className='nav'>
            <ul>
                <li><a href='#' className='profile'>Profile</a></li>
                <li><a href='#' className='messages'>Messages</a></li>
                <li><a href='#' className='news'>News</a></li>
                <li><a href='#' className='music'>Music</a></li>
                <li><a href='#' className='settings'>Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;