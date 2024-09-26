import { NavLink, useSearchParams } from "react-router-dom";
import classes from "./shoppageCate.module.css";
import { memo } from "react";

function ShoppageCate() {
  console.log("ShoppageCate Rendered");
  const [searchParams] = useSearchParams(); // giống với state cũng re-render lại
  const getParam = searchParams.get("cate") || "all";
  return (
    <div className={classes["shopCate-left"]}>
      <h2>CATEGORIES</h2>
      <div className={classes.brand}>APPLE</div>

      <ul>
        <li>
          <NavLink
            to="?cate=all"
            className={getParam === "all" ? classes.active : undefined}
          >
            All
          </NavLink>
        </li>
      </ul>
      <ul>
        <li className={classes.nameCate}>IPHONE & MAC</li>
        <li>
          <NavLink
            to="?cate=iphone"
            className={getParam === "iphone" ? classes.active : undefined}
          >
            iPhone
          </NavLink>
        </li>
        <li>
          <NavLink
            to="?cate=ipad"
            className={getParam === "ipad" ? classes.active : undefined}
          >
            iPad
          </NavLink>
        </li>
        <li>
          <NavLink
            to="?cate=macbook"
            className={getParam === "macbook" ? classes.active : undefined}
          >
            Macbook
          </NavLink>
        </li>
      </ul>

      <ul>
        <li className={classes.nameCate}>WIRELESS</li>
        <li>
          <NavLink
            to="?cate=airpod"
            className={getParam === "airpod" ? classes.active : undefined}
          >
            Airpod
          </NavLink>
        </li>
        <li>
          <NavLink
            to="?cate=watch"
            className={getParam === "watch" ? classes.active : undefined}
          >
            Watch
          </NavLink>
        </li>
      </ul>
      <ul>
        <li className={classes.nameCate}>OTHER</li>
        <li>
          <NavLink
            to="?cate=mouse"
            className={getParam === "mouse" ? classes.active : undefined}
          >
            Mouse
          </NavLink>
        </li>
        <li>
          <NavLink
            to="?cate=keyboard"
            className={getParam === "keyboard" ? classes.active : undefined}
          >
            Keyboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="?cate=other"
            className={getParam === "other" ? classes.active : undefined}
          >
            Other
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default memo(ShoppageCate);
