import { Link, useLocation } from 'react-router-dom';

function NavBar () {
    const currentPage = useLocation().pathname;

    return (
        <ul className='nav nav-tabs'>
            <li className='nav-item'>
                <Link to='/' className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
                    About Me
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/' className={currentPage === '/AboutMe' ? 'nav-link active' : 'nav-link'}>
                    About Me
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/' className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>
                    Portfolio
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/' className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
                    Contact
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/' className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>
                    Resume
                </Link>
            </li>
        </ul>
    );
}

export default NavBar;