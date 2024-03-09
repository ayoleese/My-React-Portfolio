import { NavLink } from 'react-router-dom';

const styles = {
  card: {
    padding: '25px 0',
    background: '#233D4D',
    display: 'flex',
    justifyContent: 'flex-end',
  }
};

function NavBar() {

  return (
    <div style={styles.card}>
      <ul className='nav'>
        <li className='nav-item'>
          <NavLink
            exact
            to='/'
            className='nav-link'
          >
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            to='/AboutMe'
            className='nav-link'
          >
            About Me
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            to='/Portfolio'
            className='nav-link'
          >
            Portfolio
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            to='/Contact'
            className='nav-link'
          >
            Contact
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            to='/Resume'
            className='nav-link'
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
