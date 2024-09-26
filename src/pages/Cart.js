import { useEffect, useState } from "react";
import Heading from "../compoment/Heading";
import CartItem from "../compoment/CartItem";
import classes from "./cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const isCart = useSelector((state) => state.cart);
  const [productSave, setProductSave] = useState(isCart);
  const totalPrice = productSave.reduce((acc, e) => acc + e.total, 0);

  console.log(productSave);
  const dispatch = useDispatch();

  useEffect(() => {
    setProductSave(isCart);
  }, [isCart]);

  function handleDelete(id) {
    const promptDel = window.confirm(
      `Bạn muốn xóa món hàng này ra khỏi giở hàng ?`
    );
    return promptDel && dispatch(cartAction.DELETE_CART(id));
  }

  return (
    <main className={classes.cart}>
      <Heading heading={"CART"} pre={""} />
      <h2>SHOPPING CART</h2>
      <div className={classes.containerMain}>
        <div className={classes["containerMain-left"]}>
          <div className={classes.itemTitle}>
            <div>IMAGE</div>
            <div>PRODUCT</div>
            <div>PRICE</div>
            <div>QUANTITY</div>
            <div>TOTAL</div>
            <div>REMOVE</div>
          </div>

          {productSave.map((item) => (
            <CartItem handleDelete={handleDelete} key={item.id} item={item} />
          ))}

          <div className={classes.lastChild}>
            <NavLink to={"../shop"} className={classes.btnLinkShop}>
              <i className="fa-solid fa-arrow-left"></i> Continue shopping
            </NavLink>
            <NavLink to={"/checkout"} className={classes.btnLinkCheckout}>
              Proceed to checkout
              <i className="fa-solid fa-arrow-right"></i>
            </NavLink>
          </div>
        </div>
        <div className={classes["containerMain-right"]}>
          <div>
            <p className={classes.totalTitle}> CART TOTAL</p>
            <div className={classes.rightContainer}>
              <p>
                <span>SUBTOTAL</span>
                <span>{Number(totalPrice).toLocaleString()} VND</span>
              </p>
              <p>
                <span>TOTAL</span>
                <span>{Number(totalPrice).toLocaleString()} VND</span>
              </p>
            </div>
            <form className={classes.formCoupon}>
              <input type="text" placeholder="Enter your coupon" />
              <button>
                <i className="fa-solid fa-gift"></i> Apply coupon
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
