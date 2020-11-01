import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../reusable/ProductCard";

const Cart = () => {
  const { cart } = useSelector((state) => state.shop);
  return (
    <div className="cart-page-conatiner">
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
    </div>
  );
};

export default Cart;
