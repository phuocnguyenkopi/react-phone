import { useSelector } from "react-redux";
import Heading from "../compoment/Heading";
import { useState } from "react";
import { Form } from "react-router-dom";
import classes from "./checkout.module.css";

export default function Checkout() {
  const isCart = useSelector((state) => state.cart);
  const [productSave, setProductSave] = useState(isCart);
  const totalPrice = productSave.reduce((acc, e) => acc + e.total, 0);
  return (
    <main>
      <Heading pre={"HOME / CART /"} heading={"CHECKOUT"} />
      <div className={classes.checkoutContainer}>
        <h3>BILLING DETAILS</h3>
        <div className={classes.checkout}>
          <Form className={classes["checkout-left"]}>
            <div>
              <label for="full-name">FULL NAME:</label>
              <input
                type="text"
                id="full-name"
                placeholder="Enter Your Full Name Here!"
              />
            </div>

            <div>
              <label for="email">EMAIL:</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email Here!"
              />
            </div>

            <div>
              <label for="phone-number">PHONE NUMBER:</label>
              <input
                type="tel"
                id="phone-number"
                placeholder="Enter Your Phone Number Here!"
              />
            </div>

            <div>
              <label for="address">ADDRESS:</label>
              <input
                type="text"
                id="address"
                placeholder="Enter Your Address Here!"
              />
            </div>
            <div>
              <button className={classes.placeBtn}>Place order</button>
            </div>
          </Form>
          <div className={classes["checkout-right"]}>
            <div>
              <p className={classes.totalTitle}> YOUR ORDER</p>
              <div className={classes.rightContainer}>
                {productSave.map((item) => (
                  <p>
                    <span>{item.name}</span>
                    <span>
                      {Number(item.price).toLocaleString()} VND x {item.sl}
                    </span>
                  </p>
                ))}

                <p>
                  <span>TOTAL</span>
                  <span>{Number(totalPrice).toLocaleString()} VND</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
