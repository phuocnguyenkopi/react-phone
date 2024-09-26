import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DetailItem from "../compoment/DetailItem";
import DetailPageRela from "../compoment/DetailPageRela";

export default function Detail() {
  const [productListState, setProductListState] = useState([]);
  const [searchParams] = useSearchParams();
  const getParam = searchParams.get("id");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
        );
        const data = await response.json();

        setProductListState(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const dataFinded = productListState.filter(
    (data) => data._id.$oid === getParam
  );
  const relatedFinded = productListState.filter(
    (data) =>
      data.category === dataFinded[0].category && data._id.$oid !== getParam
  );

  return (
    <main>
      <DetailItem item={dataFinded} />
      <DetailPageRela item={relatedFinded} />
    </main>
  );
}
