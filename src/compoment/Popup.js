import { createPortal } from "react-dom";
import classes from "./popup.module.css";
import { popupAction } from "../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Popup({ item, showPopup }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function removeItem() {
    dispatch(popupAction.HIDDEN_POPUP());
  }

  function detailpage(id) {
    navigate(`detail?id=${id}`);
    dispatch(popupAction.HIDDEN_POPUP());
  }

  return createPortal(
    <div className={showPopup && classes.showPopup}>
      <div className={`${classes.popup}`}>
        <div className={classes.popupImg}>
          <img src={item.img1} />
        </div>
        <div className={classes.popupSummary}>
          <button className={classes["out-modal"]} onClick={removeItem}>
            x
          </button>
          <h2>{item.name}</h2>
          <p className={classes.price}>
            {Number(item.price).toLocaleString()} VND
          </p>
          <p className={classes.short}>{item.short_desc}</p>
          <button
            className={classes.cart}
            onClick={() => detailpage(item._id.$oid)}
          >
            VIEW DETAIL
          </button>
        </div>
      </div>
      <div className={classes.modal} onClick={removeItem}></div>
    </div>,
    document.getElementById("modal")
  );
}
