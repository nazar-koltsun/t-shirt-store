import React from "react";
import Header from "./../components/Header";
import { Link } from "react-router-dom";

const CartScreen = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      {/* Cart */}
      <div className="container">
        {/* <div className=" alert alert-info text-center mt-3">
          Your cart is empty
          <a
            className="btn btn-success mx-5 px-5 py-3"
            href="/"
            style={{
              fontSize: "12px",
            }}
          >
            SHOPPING NOW
          </a>
        </div> */}
        <div className=" alert alert-info text-center mt-3">
          Total Cart Products
          <a className="text-success mx-2" href="/cart">
            (4)
          </a>
        </div>
        {/* cartiterm */}
        <div className="cart-iterm row">
          <div className="remove-button d-flex justify-content-center align-items-center">
            <i className="fas fa-times"></i>
          </div>
          <div className="cart-image col-md-3">
            <img src="./images/2.jpeg" alt="" />
          </div>
          <div className="cart-text col-md-5 d-flex align-items-center">
            <a href="#">
              <h4>Nike Girls Shoe</h4>
            </a>
          </div>
          <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
            <h6>QUANTITY</h6>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start  d-flex flex-column justify-content-center col-sm-7">
            <h6>SUBTOTAL</h6>
            <h4>$456</h4>
          </div>
        </div>

        {/* End of cart iterms */}
        <div className="total">
          <span className="sub">total:</span>
          <span className="total-price">$567</span>
        </div>
        <hr />
        <div className="cart-buttons d-flex align-items-center row">
          <a href="/" className="col-md-6 ">
            <button>Continue To Shopping</button>
          </a>
          <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
            <button>
              <a href="/shipping" className="text-white">
                Checkout
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
