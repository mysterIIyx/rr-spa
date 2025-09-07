import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/css/Header.css';
import img1 from '../images/header1.png';
import img2 from '../images/header2.png';
import img3 from '../images/header3.png';
import img4 from '../images/header4.png';

const listImg = {
  "/": img1,
  "/products": img2,
  "/contact": img3,
  "/admin": img4,
  "*": img1, // Obrazek domyślny
};

const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    // Wybierz obrazek na podstawie bieżącej ścieżki
    const headerImage = listImg[currentPath] || listImg["*"];

    return (
        <>
            <div className="header">
                <img src={headerImage} alt="header" className='header-img' />
            </div>
        </>
    );
};

export default Header;