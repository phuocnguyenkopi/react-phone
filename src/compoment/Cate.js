import { NavLink } from "react-router-dom";
import classes from "./cate.module.css";

export default function Cate() {
  return (
    <div className={classes.cate}>
      <div className={classes["cate-title"]}>
        <p>CAREFULLY CREATED COLLECTIONS</p>
        <h2>BROWSE OUR CATEGORIES</h2>
      </div>

      <div className={classes["cate-img"]}>
        <div>
          <NavLink to="shop">
            <img src="img/product_1.png" alt="" />
          </NavLink>
        </div>
        <div>
          <NavLink to="shop">
            <img src="img/product_2.png" alt="" />
          </NavLink>
        </div>
        <div>
          <NavLink to="shop">
            <img src="img/product_3.png" alt="" />
          </NavLink>
        </div>
        <div>
          <NavLink to="shop">
            <img src="img/product_4.png" alt="" />
          </NavLink>
        </div>
        <div>
          <NavLink to="shop">
            <img src="img/product_5.png" alt="" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
