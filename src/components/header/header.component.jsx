import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='header-links'>
            <Link className='link' to='/shop'>SHOP</Link>
            <Link className='link' to='/shop'>CONTACT</Link>
            {
                currentUser ?
                <div className='link' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='link' to='/signin'>SIGN IN</Link>
            }       
        </div>
    </div>
);


export default Header;