import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({ name, id, desc, image, price }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.shop);
  const [openModel, setOpenModel] = useState(false);
  const handleAddItemInCart = (e) => {
    // e.preventDefault();
    e.stopPropagation();
    // console.log("add item to cart: ", name);
    dispatch({ type: "ADD_ITEM", payload: { name, id, desc, image, price } });
  };
  const incrementItem = (e) => {
    e.stopPropagation();
    // console.log("Increment Product: ", name);
    dispatch({ type: "INCREMENT_ITEM_IN_CART", payload: { id } });
  };
  const decrementItem = (e) => {
    e.stopPropagation();
    // console.log("Decrement Product: ", name);
    dispatch({ type: "DECREMENT_ITEM_IN_CART", payload: { id } });
  };

  const checkItemInCart = ((itemId) => {
    const x = !!cart ? cart.filter((item) => item.id === itemId) : [];
    return x;
  })(id);

  const toggleOpenModel = (e) => {
    // e.preventDefault();
    console.log("click");
    console.log(openModel);
    setOpenModel(!openModel);
  };

  return (
    <div className="product-card-container" onClick={toggleOpenModel}>
      {openModel && (
        <div className="product-detail-model">
          <button onClick={toggleOpenModel}>Close</button>
          <div className="product-image-container">
            <img src={image} alt={name} />
          </div>
          <div className="product-desc-container">
            <h2>{name}</h2>
            <p>
              <span>
                <strong>Desc: </strong>
              </span>
              {desc}
            </p>
          </div>
        </div>
      )}
      <div className="product-image-container">
        <img src={image} alt={name} />
      </div>
      <div className="product-desc-container">
        <h2>{name}</h2>
        <p>
          <span>
            <strong>Desc: </strong>
          </span>
          {desc}
        </p>
      </div>
      <div className="product-action-container">
        <div className="product-price">Price: {price || 20}$</div>
        {checkItemInCart.length > 0 && (
          <div className="product-quantity">
            Quantity: {checkItemInCart[0].quantity}
          </div>
        )}
        <div className="product-action-button-container">
          {checkItemInCart.length === 0 ? (
            <button onClick={handleAddItemInCart}>Add to Cart</button>
          ) : (
            <>
              <button onClick={incrementItem} className="cart-item-action-btn">
                <img src="/static/icons/plus.svg" alt="+" />
              </button>
              <button onClick={decrementItem} className="cart-item-action-btn">
                <img src="/static/icons/minus.svg" alt="-" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
