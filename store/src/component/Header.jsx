import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from 'react-router-dom';
export const Header = () => {
    return (
        <div className='bg-gray-300'>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <>
                    <Link to="/">
                        <img className='h-20' src="/boas_Logo.png" alt="" />
                    </Link>
                </>
                <div className='flex items-center justify-between gap-5'>
                    <Link to="/product/1">Vintage Women</Link>
                    <Link to="/product/2">Vintage Men</Link>
                    <Link to="/product/3">Jeans under €30 / £30</Link>
                    <Link to="/product/4">Levi's Jeans</Link>
                </div>
                <div className='flex items-center  justify-between gap-5'>
                    <div className='flex items-center flex-col'>
                        <AccountCircleIcon />
                        Account
                    </div>
                    <div className='flex items-center flex-col'>
                        <ShoppingCartCheckoutIcon />
                        Cart
                    </div>
                </div>
            </div>
        </div>
    )
}
