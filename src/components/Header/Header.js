import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
	return (
		<header className="main-header">
			<div className="logo">
				<img src={logo} alt="Ema-John Site Logo" />
			</div>
			<nav className="header-menu">
				<a href="/shop">Shop</a>
				<a href="/review">Order Review</a>
				<a href="/inventory">Manage Inventory</a>
			</nav>
		</header>
	);
};

export default Header;