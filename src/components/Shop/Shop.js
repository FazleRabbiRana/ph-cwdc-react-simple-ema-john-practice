import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);
	const [displayMatchedProducts, setMatchedProducts] = useState([]);

	useEffect(() => {
		fetch('./products.JSON')
			.then(res => res.json())
			.then(data => {
				setProducts(data);
				setMatchedProducts(data);
			});
	}, []);

	const addToCart = product => {
		const newCart = [...cart, product];
		setCart(newCart);
	}

	const searchProduct = event => {
		const searchText = event.target.value;
		const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
		setMatchedProducts(matchedProducts);
		// console.log(matchedProducts.length);
		console.log(displayMatchedProducts);
	}

	return (
		<section className="shop-container">
			<div className="search-box">
				<div className="input-wrapper">
					<input 
						type="text" 
						placeholder="Type product name to search"
						className="search-input" 
						onChange={searchProduct}
					/>
				</div>
				<button className="cart-view-btn">
					<FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
					<span className="cart-item">895</span>
				</button>
			</div>

			<div className="products-container">
				<div className="all-products">
					{
						displayMatchedProducts.map(product => <Product key={product.key} product={product} addToCart={addToCart} />)
					}
				</div>
				<div className="cart-wrapper">
					<Cart cart={cart} />
				</div>
			</div>
		</section>
	);
};

export default Shop;