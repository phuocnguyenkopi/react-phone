import { useState } from "react";
import classes from "./detailitem.module.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../store";

export default function DetailItem({ item }) {
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();

  function handleDecrement() {
    setCounter((prevCounter) => prevCounter - 1);
  }
  function handleIncrement() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  function handleAddToCart(id, img, name, price, sl) {
    dispatch(
      cartAction.ADD_CART({
        id: id,
        img: img,
        name: name,
        price: price,
        sl: sl,
        total: sl * price,
      })
    );
    alert(`Add to cart`);
    setCounter(1);
  }

  return (
    <>
      {item.map((item) => (
        <div className={classes.ssDetail} key={item._id.$oid}>
          <div className={classes.detailItem}>
            <div className={classes["detailItem-left"]}>
              <div className={classes["detailItem-left-secon"]}>
                <div>
                  <img src={item.img1} alt="img1" />
                </div>
                <div>
                  <img src={item.img2} alt="img2" />
                </div>
                <div>
                  <img src={item.img3} alt="img3" />
                </div>
                <div>
                  <img src={item.img4} alt="img4" />
                </div>
              </div>
              <div className={classes["detailItem-left-main"]}>
                <img src={item.img4} alt="img4" />
              </div>
            </div>
            <div className={classes["detailItem-right"]}>
              <h2>{item.name}</h2>
              <p className={classes["detailItem-right-price"]}>
                {Number(item.price).toLocaleString()} VND
              </p>
              <p className={classes["detailItem-right-desc"]}>
                {item.short_desc}
              </p>
              <p className={classes["detailItem-right-cate"]}>
                <span>category: </span>
                {item.category}
              </p>
              <div className={classes["detailItem-right-addCart"]}>
                <div className={classes["detailItem-right-qua"]}>
                  Quanlity
                  <div>
                    <span onClick={() => handleDecrement()}>
                      <i className="fa-solid fa-caret-left"></i>{" "}
                    </span>
                    <span>{counter}</span>
                    <span onClick={() => handleIncrement()}>
                      <i className="fa-solid fa-caret-right"></i>
                    </span>
                  </div>
                </div>
                <button
                  onClick={() =>
                    handleAddToCart(
                      item._id.$oid,
                      item.img1,
                      item.name,
                      item.price,
                      counter
                    )
                  }
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className={classes["detailItem-descrip"]}>DESCRIPTION</div>
          <h4 className={classes.ssDes}>PRODUCT DESCRIPTION</h4>
          <div className={classes.listDis}>
            {item.long_desc.split("\n").map((e, key) => (
              <p key={key}>{e}</p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
