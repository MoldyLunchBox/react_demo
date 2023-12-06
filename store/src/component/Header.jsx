import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className='bg-white'>
            <nav className='flex justify-between mx-auto items-center relative'>
                <div>
                    <Link to="/">
                        <img className='h-20' src="/boas_Logo.png" alt="" />
                    </Link>
                </div>
                <div className={`nav-links md:static fixed bg-white min-h-fit  left-0 top-[-100%] md:w-auto w-full flex items-center px-5 transition-transform duration-500 z-50 ${showMenu ? 'top-[5vh]' : 'top-[-100%]'}`}>
                    <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8'>
                        <Link to="/product/1">Vintage Women</Link>
                        <Link to="/product/2">Vintage Men</Link>
                        <Link to="/product/3">Jeans under €30 / £30</Link>
                        <Link to="/product/4">Levi's Jeans</Link>
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
                        {showMenu ? 'x' : 'menu'}
                    </div>
                </div>
            </nav>
        </header>
    );
};


// <div className='bg-gray-300'>
//   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
//     <>
//       <Link to="/">
//         <img className='h-20' src="/boas_Logo.png" alt="" />
//       </Link>
//     </>
//     {/* Show menu button on smaller screens */}
//     <div className='lg:hidden'>
//       <button onClick={toggleMenu}>Menu</button>
//     </div>
//     {/* Show navigation links on larger screens */}
//     <div className={`lg:flex items-center justify-between gap-5 ${menuVisible ? 'hidden' : 'flex'}`}>
//       <Link to="/product/1">Vintage Women</Link>
//       <Link to="/product/2">Vintage Men</Link>
//       <Link to="/product/3">Jeans under €30 / £30</Link>
//       <Link to="/product/4">Levi's Jeans</Link>
//     </div>
//     <div className='lg:flex items-center justify-between gap-5'>
//       <div className='flex items-center flex-col'>
//         <AccountCircleIcon />
//         Account
//       </div>
//       <div className='flex items-center flex-col'>
//         <ShoppingCartCheckoutIcon />
//         Cart
//       </div>
//     </div>
//   </div>
// </div>
