import { useNavigate } from "react-router-dom";
import classes from "./banner.module.css";

export default function Banner() {
  const navigate = useNavigate();

  function shopBtn() {
    navigate("/shop");
  }
  return (
    <div className={classes.banner}>
      <div className={classes["banner-img"]}>
        <img src="img/banner1.jpg" alt="banner" />
      </div>
      <div className={classes["banner-summary"]}>
        <p>NEW INSPIRATION 2020</p>
        <h2>20% OFF ON NEW SEASON</h2>
        <button onClick={shopBtn}>Browse collections</button>
      </div>
    </div>
  );
}
