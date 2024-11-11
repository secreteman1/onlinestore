import React from 'react';
import './Styles/Header.css';

function Header() {
    return (
        <header className="header">
            <nav className='header-nav'>
                <img src="//static-basket-01.wbbasket.ru/vol0/i/v3/header/logoWb.svg" width="216" height="58" alt="Wildberries"/>
                <button className='nav-element__burger j-menu-burger-btn j-wba-header-item'>
                    <span className="nav-element__burger-line"></span>
                </button>
                <input className='nav-input' type="text" placeholder="Найти на .."/>
                <ul className="nav-links">
                    <li><a class="navbar-pc__link j-wba-header-item" data-wba-header-name="Pick_up_points" href=" ">            <span class="navbar-pc__icon navbar-pc__icon--address"></span>            Адреса        </a></li>
                    <li><a class="navbar-pc__link j-main-login j-wba-header-item" data-wba-header-name="Login" href=" " data-link="{on 'mouseenter' ~root.toggleControl true}" data-jsv="#4^/4^">            <span class="navbar-pc__icon navbar-pc__icon--profile"></span>            Войти        </a></li>
                    <li><a class="navbar-pc__link j-wba-header-item" data-wba-header-name="Cart" href="/lk/basket">            <span class="navbar-pc__icon navbar-pc__icon--basket"><script type="jsv#3^"></script><script type="jsv/3^"></script></span>            Корзина        </a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
