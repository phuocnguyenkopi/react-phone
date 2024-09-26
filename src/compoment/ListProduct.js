import { useState } from "react";
import { useEffect } from "react";
import classes from "./listproduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import { popupAction } from "../store";
import Popup from "./Popup";
import ItemProduct from "./ItemProduct";

export default function ListProduct() {
  const [productState, setProductState] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
        );
        const data = await response.json();
        const limitedData = data.slice(0, 8);
        setProductState(limitedData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // lay dl

  const showPopup = useSelector((state) => state.popup.popUp);
  const itemPayload = useSelector((state) => state.popup.payload);

  // cap nhap
  function getItem(item) {
    dispatch(popupAction.SHOW_POPUP(item));
  }

  return (
    <>
      <div className={classes.listProduct}>
        <div className={classes["list-summary"]}>
          <p>MADE THE HARD WAY</p>
          <h2>TOP TRENDING PRODUCTS</h2>
        </div>
        <div className={classes["list-items"]}>
          {productState.map((item) => (
            <ItemProduct key={item._id.$oid} item={item} getItem={getItem} />
          ))}
        </div>
      </div>

      {showPopup && <Popup item={itemPayload} showPopup={showPopup}></Popup>}
    </>
  );
}
