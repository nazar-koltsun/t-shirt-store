import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import products from "../../data/Products";
import Pagination from "./pagination";

const ShopSection = () => {
  const isLocalhost = window.location.href.indexOf('localhost') > 0;
  const baseUrl = isLocalhost ? '' : '/t-shirt-store';

  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {products.map((product) => (
                  <div
                    className="shop col-lg-4 col-md-6 col-sm-6"
                    key={product._id}
                  >
                    <div className="border-product">
                      <Link to={`${baseUrl}/products/${product._id}`}>
                        <div className="shopBack">
                          <img src={`./images/${product.image}`} alt={product.name} />
                        </div>
                      </Link>

                      <div className="shoptext">
                        <p>
                          <Link to={`${baseUrl}/products/${product._id}`}>
                            {product.name}
                          </Link>
                        </p>

                        <Rating
                          value={product.rating}
                          text={`${product.numReviews} reviews`}
                        />
                        <h3>${product.price}</h3>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Pagination */}
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
