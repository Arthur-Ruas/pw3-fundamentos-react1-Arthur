import {Outlet, Link} from 'react-router-dom';
import './navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <ul className='navbar__list'>
                <li className='navbar__item'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='navbar__item'>
                    <Link to='/empresa'>Empresa</Link>
                </li>
                <li className='navbar__item'>
                    <Link to='/contato'>Contato</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
  }
  
  export default Navbar;