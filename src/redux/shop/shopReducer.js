import {ADD_ITEM} from "./shopActionTypes";

const initialState = {
  products: [
    {
      name: "Product 1",
      id: 3453322,
      desc: "something about product 1",
      image: "https://i.ndtvimg.com/i/2017-02/coffee_620x318_41486141224.jpg",
    },
    {
      name: "Product 2",
      id: 34532,
      desc: "something about product 2",
      image: "https://i.ndtvimg.com/i/2017-02/coffee_620x318_41486141224.jpg",
    },
    {
      name: "Product 3",
      id: 53322,
      desc: "something about product 3",
      image: "https://i.ndtvimg.com/i/2017-02/coffee_620x318_41486141224.jpg",
    },
    {
      name: "Product 4",
      id: 34533,
      desc: "something about product 4",
      image: "https://i.ndtvimg.com/i/2017-02/coffee_620x318_41486141224.jpg",
    },
    {
      name: "Product 5",
      id: 5453322,
      desc: "something about product 5",
      image: "https://i.ndtvimg.com/i/2017-02/coffee_620x318_41486141224.jpg",
    },
  ],
  loading: false,
};

const shop = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default shop;
