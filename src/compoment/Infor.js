import classes from "./infor.module.css";

export default function Infor() {
  return (
    <>
      {" "}
      <div className={classes["infor-top"]}>
        <div>
          <p>FREE SHIPPING</p>
          <p>Free shipping worldwide</p>
        </div>
        <div>
          <p>24 X 7 SERVICE</p>
          <p>Free shipping worldwide</p>
        </div>
        <div>
          <p>FESTIVAL OFFER</p>
          <p>Free shipping worldwide</p>
        </div>
      </div>
      <div className={classes["infor-bottom"]}>
        <div className={classes.inforLeft}>
          <p>LET'S BE FRIENDS!</p>
          <p>Nisi nisi tempor consequat laboris nisi.</p>
        </div>

        <div className={classes.inforRight}>
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </>
  );
}
