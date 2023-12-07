import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className='bg-white px-2'>
            <nav className='flex justify-between mx-auto items-center relative'>
                <div>
                    <Link to="/">
                        <img className='h-20' src="/boas_Logo.png" alt="" />
                    </Link>
                </div>
                <div className={`nav-links md:static fixed bg-white min-h-fit  left-0 top-[-100%] md:w-auto w-full flex items-center px-5 transition-transform duration-500 z-50 ${showMenu ? 'top-[80px]' : 'top-[-100%]'}`}>
                    <ul className='flex md:flex-row flex-col md:items-center lg:gap-8 gap-4'>
                        <Link className='worksElements' to="/product/1">Vintage Women</Link>
                        <Link className='worksElements' to="/product/2">Vintage Men</Link>
                        <Link className='worksElements' to="/product/3">Jeans under €30 / £30</Link>
                        <Link className='worksElements' to="/product/4">Levi's Jeans</Link>
                    </ul>
                </div>
                <div className='flex items-center gap-6'>

                    <div className='flex items-center flex-col'>
                        <AccountCircleIcon />
                        Account
                    </div>
                    <div className='flex items-center flex-col'>
                        <ShoppingCartCheckoutIcon />
                        Cart
                    </div>
                    <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
                        {showMenu ? <CloseIcon /> : <MenuIcon/>}
                    </div>
                </div>
            </nav>
        </header>
    );
};
