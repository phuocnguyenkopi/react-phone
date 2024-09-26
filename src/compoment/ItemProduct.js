import classes from "./itemproduct.module.css";

export default function ItemProduct({ item, getItem, detailpage }) {
  return (
    <div
      className={classes["list-item"]}
      onClick={getItem ? () => getItem(item) : () => detailpage(item._id.$oid)}
    >
      <div className={classes["list-img"]}>
        <img src={item.img1} alt="" />
      </div>
      <p className={classes["list-product-name"]}>{item.name}</p>
      <p className={classes["list-product-price"]}>
        {Number(item.price).toLocaleString()} VND
      </p>
    </div>
  );
}
