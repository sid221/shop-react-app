import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../reusable/ProductCard";

const Cart = () => {
  const { cart } = useSelector((state) => state.shop);

  const getTotalPrice = ((cart) => {
    let price = 0;
    cart.forEach((item) => {
      return (price += item.quantity * item.price);
    });
    return price;
  })(cart);
  return (
    <div className="cart-page-conatiner">
      <div>
        <h1>Your Shopping Cart</h1>
      </div>
      <div className="cart-section">
        {cart.length > 0 ? (
          <div className="cart-items-container">
            {cart.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="cart-empty-markup">
            <h2>Your Cart is Empty!</h2>
            <p>Go to shop page to add some products into your cart.</p>
            <Link to="/shop">Shop</Link>
          </div>
        )}
        {cart.length > 0 && (
          <div className="cart-bill-container">
            <h2>Cart Summary</h2>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Rate</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}$</td>
                      <td>{item.quantity * item.price}$</td>
                    </tr>
                  );
                })}
                <tr className="cart-bill-total">
                  <th colSpan={3}>Total</th>
                  <th>{getTotalPrice}$</th>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
