import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LibraryLogo from '../assets/Library.svg';

const Nav = ({numberOfItems}) => {
  function openMenu() {
    document.body.classList.add ("menu--open");
  }

  function closeMenu() {
    document.body.classList.remove ("menu--open");
  }
    return (
        <nav>
        <div className="nav__container">
          <Link to="/">
            <img src={LibraryLogo} alt="library logo" className="logo" />
            </Link>
            <ul className="nav__links">
              <li className="nav__List">
               <Link to="/" className="nav__link">
                Home
               </Link> 
                </li>  
              <li className="nav__List">
               <Link to="/books" className="nav__link">
                Books
               </Link> 
                </li>
                 <li className="nav__icon">
                      <Link to="/cart" className="nav__link">
                        <FontAwesomeIcon icon="shopping-cart" />
                        </Link>
                        <span className="cart__length">{numberOfItems}</span>
                        </li> 
            </ul>
            <button className="btn__menu" onClick={openMenu}>
                   <FontAwesomeIcon icon="bars" />
                    </button>

            <div className="menu__backdrop">
                <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                    <FontAwesomeIcon icon="times" />
                </button>

               <ul className="menu__links">
                <li className="menu__list">
                 <Link to="/" className="menu__link">
                   Home 
                 </Link>
                </li>
                <li className="menu__list">
                 <Link to="/books" className="menu__link">
                   Books 
                 </Link>
                </li>
                <li className="menu__list">
                 <a href="/cart" className="menu__link">
                   Cart 
                 </a>
                </li>
               </ul>
                </div>  
        </div>
        </nav>
    );
};

export default Nav;