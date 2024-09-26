import Heading from "../compoment/Heading";
import ShoppageCate from "../compoment/ShopPageCate";
import ShoppageProductList from "../compoment/ShoppageProductList";
import classes from "./shop.module.css";

export default function Shop() {
  console.log("shop");
  return (
    <main>
      <Heading heading={"SHOP"} pre={""} />
      <div className={classes.shopCate}>
        <ShoppageCate />
        <ShoppageProductList />
      </div>
    </main>
  );
}
