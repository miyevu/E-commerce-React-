import { logo, hamburger } from '../assets/icons';
import NavPopUp from './NavPopUp';
import  { FC, useState } from 'react';

const NavBar: FC = () => {

    const [navPopupOpen, setNavPopupOpen] = useState(false);
  
    const closePopup = () => {
        setNavPopupOpen(false);
    };

    return (
        <>
            <header className="header">
                <nav className="nav-header">
                    <div className="logo-container">
                        <img src={ logo } alt="Logo" className="logo" />
                    </div>
                    <ul className="nav-list">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <div className="mobile-icons">
                        <div className="icon-container">
                                <button
                                onClick={() => setNavPopupOpen(true)}
                                className="hamburger-btn"
                                aria-label="Open navigation menu"
                            >
                                <img src={hamburger} alt="hamburger icon" className='hamburger icon' />
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
            { navPopupOpen && <NavPopUp closePopup={closePopup} />}
        </>
    );
}

export default NavBar;