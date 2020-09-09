import React from 'react';
import '../Style/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            {/* Logo amazon */}
            <Link to='/'>
                <img
                    className='header__logo'
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                />
            </Link>


            {/* Input search */}
            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                {/*Logo*/}
                <SearchIcon className='header__searchIcon' />
            </div>

            {/*navBar Option */}
            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Hello Guest
                    </span>
                    <span className='header__optionLineTwo'>
                        Sign in
                    </span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Returns
                    </span>
                    <span className='header__optionLineTwo'>
                        &amp; Orders
                    </span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Your
                    </span>
                    <span className='header__optionLineTwo'>
                        Prime
                    </span>
                </div>
                <div className='header__optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header__optionLineTwo header__basketCount'>
                        0
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header
