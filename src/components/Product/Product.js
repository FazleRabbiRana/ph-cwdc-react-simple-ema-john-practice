import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ReactStars from 'react-rating-stars-component';
import './Product.css';
// import ReactStars from 'react-rating-stars-component';

const Product = (props) => {
	const {name, img, seller, stock, star, price, features} = props.product;

	return (
		<div className="product">
			<div className="product-img">
				<img src={img} alt={name} />
			</div>
			<div className="product-details">
				<h3 className="product-name">{name}</h3>
				<div className="product-desc">
					<div>
						<p>by: <b>{seller}</b></p>
						<p className="product-price">Price: <b>${price}</b></p>
						<p>only <b>{stock}</b> left in stock - order soon</p>
						<button 
							className="btn-regular"
							onClick={() => props.addToCart(props.product)}
						>
							<FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
							Add to cart
						</button>
					</div>
					<div>
						<div className="ratings">
							<ReactStars 
								edit={false}
								count={5}
								value={star}
								isHalf={true}
								emptyIcon={<i className="far fa-star"></i>}
								halfIcon={<i className="fas fa-star-half-alt"></i>}
								filledIcon={<i className="fas fa-star"></i>}
								activeColor="#ffd700"
							/>
						</div>
						<div className="features">
							<h4 className="feature-heading">Features</h4>
							<ul>
								{
									features.map((feature, index) => <li key={index}>{feature.description}: {feature.value}</li>)
								}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;