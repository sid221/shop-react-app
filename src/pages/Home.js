import React from "react";

const Home = (props) => {
  return (
    <div className="home-page-container">
      <section>
        <div className="content-container">
          <h1>Everything you need, Get it here</h1>
          <p>
            This is a online store where you can get daily essentials without
            much hassel of visiting multiple shops. Try everything if it doesn't
            match your need get it replaced or even refund.
          </p>
        </div>
        <div className="image-container">
          <img src="/static/images/online-shop-cart.svg" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
