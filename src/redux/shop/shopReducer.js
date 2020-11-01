import {
  ADD_ITEM,
  INCREMENT_ITEM_IN_CART,
  DECREMENT_ITEM_IN_CART,
} from "./shopActionTypes";

const initialState = {
  products: [
    {
      name: "Product 1",
      id: 3453322,
      desc: "something about product 1",
      image: "https://i.ndtvimg.com/i/2017-02/coffee_620x318_41486141224.jpg",
      price: 10,
    },
    {
      name: "Product 2",
      id: 34532,
      desc: "something about product 2",
      image: "https://i.ndtvimg.com/i/2017-02/coffee_620x318_41486141224.jpg",
      price: 15,
    },
    {
      name: "Product 3",
      id: 53322,
      desc: "something about product 3",
      image: "https://i.ndtvimg.com/i/2017-02/coffee_620x318_41486141224.jpg",
      price: 20,
    },
    {
      name: "Product 4",
      id: 34533,
      desc: "something about product 4",
      image: "https://i.ndtvimg.com/i/2017-02/coffee_620x318_41486141224.jpg",
      price: 13,
    },
    {
      name: "Product 5",
      id: 5453322,
      desc: "something about product 5",
      image: "https://i.ndtvimg.com/i/2017-02/coffee_620x318_41486141224.jpg",
      price: 18,
    },
  ],
  loading: false,
  cart: [],
};

const shop = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case INCREMENT_ITEM_IN_CART:
      // let newCart = state.cart.map((item) => {
      //   return item.id === action.payload.id
      //     ? { ...item, quantity: item.quantity + 1 }
      //     : item;
      // });
      return {
        ...state,
        cart: state.cart.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        }),
      };

    case DECREMENT_ITEM_IN_CART:
      let newCart = [];
      state.cart.forEach((item) => {
        if (item.id === action.payload.id && item.quantity > 0) {
          if (item.quantity - 1 === 0) {
            return;
          }
          return newCart.push({ ...item, quantity: item.quantity - 1 });
        } else {
          return newCart.push(item);
        }
      });
      return { ...state, cart: newCart };

    default:
      return { ...state };
  }
};

export default shop;
