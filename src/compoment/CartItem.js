import { useEffect, useState } from "react";
import classes from "./cartItem.module.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../store";
export default function CartItem({ item, handleDelete }) {
  const [quantityState, setQuantity] = useState(item.sl);
  const dispatch = useDispatch();

  function handleDecrement() {
    setQuantity((prevCounter) => prevCounter - 1);
  }
  function handleIncrement() {
    setQuantity((prevCounter) => prevCounter + 1);
  }

  useEffect(() => {
    dispatch(
      cartAction.UPDATE_CART({
        id: item.id,
        quantityState,
        total: item.price * quantityState,
      })
    );
    if (quantityState <= 0) {
      dispatch(cartAction.DELETE_CART(item.id));
    }
  }, [quantityState]);

  return (
    <div className={classes.itemCart} key={item.id}>
      <div className={classes.itemCartImg}>
        <img src={item.img} alt="ahihi" />
      </div>
      <div className={classes.itemCartName}>{item.name}</div>
      <div className={classes.price}>
        <p>{Number(item.price).toLocaleString()} </p>
        <p>VND</p>
      </div>
      <div className={classes.quantity}>
        <span onClick={() => handleDecrement()}>
          <i className="fa-solid fa-caret-left"></i>
        </span>
        <span>{quantityState}</span>
        <span onClick={() => handleIncrement()}>
          <i className="fa-solid fa-caret-right"></i>
        </span>
      </div>
      <div className={classes.price}>
        <p>{Number(item.total).toLocaleString()} </p>
        <p>VND</p>
      </div>
      <div onClick={() => handleDelete(item.id)}>
        <i className="fa-regular fa-trash-can"></i>
      </div>
    </div>
  );
}
