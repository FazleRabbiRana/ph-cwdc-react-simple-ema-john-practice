import React from 'react';
import './Cart.css';

const Cart = (props) => {
	const {cart} = props;

	let totalAmount = 0;
	let shippingAmount = 0;
	for(const product of cart) {
		totalAmount += product.price;
		shippingAmount += product.shipping;
	}
	let taxAmount = totalAmount > 0 ? totalAmount * 0.1 : 0;
	const grandTotalAmount = totalAmount + shippingAmount + taxAmount;

	return (
		<div className="cart">
			<table>
				<caption className="cart-heading">Items added: {cart.length}</caption>
				<tbody>
					<tr>
						<td className="label">Total</td>
						<td className="value">${totalAmount.toFixed(2)}</td>
					</tr>
					<tr>
						<td className="label">Shipping</td>
						<td className="value">${shippingAmount.toFixed(2)}</td>
					</tr>
					<tr>
						<td className="label">Tax</td>
						<td className="value">${taxAmount.toFixed(2)}</td>
					</tr>
					<tr>
						<td className="label">Grand Total</td>
						<td className="value">${grandTotalAmount.toFixed(2)}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Cart;