import { useNavigate, useSearchParams } from "react-router-dom";
import classes from "./shoppageProductList.module.css";
import { useEffect, useState } from "react";
import ItemProduct from "./ItemProduct";
export default function ShoppageProductList() {
  const [searchParams] = useSearchParams();
  const getParam = searchParams.get("cate") || "all";
  const [productListState, setProductListState] = useState([]);
  console.log(getParam);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
        );
        const data = await response.json();
        const dataFinded =
          getParam === "all"
            ? data
            : data.filter((data) => data.category === getParam);
        setProductListState(dataFinded);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [getParam]);

  console.log(productListState);
  const navigate = useNavigate();

  function detailpage(id) {
    navigate(`../detail?id=${id}`);
  }
  return (
    <div className={classes["shoppage-productList"]}>
      <form className={classes.formSearch}>
        <input type="text" placeholder="Enter Search Here!" />
        <select name="" id="">
          <option value="Default setting">Default setting</option>
          <option value="1">1</option>
        </select>
      </form>

      <div className={classes["shoppage-listProduct"]}>
        {productListState.map((item) => (
          <ItemProduct
            key={item._id.$oid}
            item={item}
            detailpage={detailpage}
          />
        ))}
      </div>
    </div>
  );
}
