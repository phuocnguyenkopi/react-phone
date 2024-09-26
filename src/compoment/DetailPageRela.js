import classes from "./DetailPagerela.module.css";

import { useNavigate } from "react-router-dom";
import ItemProduct from "./ItemProduct";

export default function DetailPageRela({ item }) {
  const navigate = useNavigate();
  function detailpage(id) {
    navigate(`?id=${id}`);
  }
  return (
    <main>
      <h4 className={classes.relaTitle}>RELATED PRODUCTS</h4>
      <div className={classes.listRela}>
        {item.map((item) => (
          <ItemProduct
            key={item._id.$oid}
            item={item}
            detailpage={detailpage}
          />
        ))}
      </div>
    </main>
  );
}
