import React from "react";
import Pricing from "./pricingUI";
import ballon from "../Assets/images/baloon.svg";
import flower from "../Assets/images/flower.svg";
import "../css/default.css";
import "../css/style.css";
import "../css/LineIcons.css";
import "../css/style.css.map";
import "../css/magnific-popup.css";
import "../css/pricing.css";

const Price = () => {
  return (
    <div>
      <section id="pricing" className="pricing-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center pb-10">
                <h4 className="title">Our Pricing</h4>
                <p className="text">
                  Stop wasting time and money designing and managing a website
                  that doesn’t get results. Happiness guaranteed!
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <Pricing
              title="Basic"
              price="$ 199"
              class="pricing-header text-center"
              imgclass="hide"
              path1="cls-1 color-1"
              path2="cls-2 color-1"
              path3="cls-3 color-1"
              path4="cls-4 color-1"
              imgsize="single-pricing mt-40"
            />
            <Pricing
              title="Pro"
              price="$ 399"
              class="pricing-header"
              img={ballon}
              imgclass="pricing-baloon"
              path1="cls-1 color-2"
              path2="cls-2 color-2"
              path3="cls-3 color-2"
              path4="cls-4 color-2"
              imgsize="single-pricing pro mt-40"
            />
            <Pricing
              title="Enterprise"
              price="$ 799"
              class="pricing-header text-right"
              img={flower}
              imgclass="pricing-flower"
              path1="cls-1 color-3"
              path2="cls-2 color-3"
              path3="cls-3 color-3"
              path4="cls-4 color-3"
              imgsize="single-pricing enterprise mt-40"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Price;
