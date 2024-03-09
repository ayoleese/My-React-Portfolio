import { Link, useLocation } from 'react-router-dom';

const styles = {
    card: {
      margin: 20,
      background: '#e8eaf6',
    }
  };

function NavBar () {
    const currentPage = useLocation().pathname;

    return (
        <div style={styles.card}>
        <ul className='nav nav-tabs'>
            <li className='nav-item'>
                <Link to='/' className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/AboutMe' className={currentPage === '/AboutMe' ? 'nav-link active' : 'nav-link'}>
                    About Me
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Portfolio' className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>
                    Portfolio
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Contact' className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
                    Contact
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Resume' className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>
                    Resume
                </Link>
            </li>
        </ul>
        </div>
    );
}

export default NavBar;