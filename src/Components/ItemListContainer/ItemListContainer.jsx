import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import BounceLoader from "react-spinners/BounceLoader";
import { db } from "../../firebaseConfig";

import { collection, getDocs, query, where } from "firebase/firestore";
import { category } from "@mui/icons-material";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#ff5c00",
};

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "products");

    let consulta = undefined;

    if (categoryName) {
      const q = query(itemsCollection, where("category", "==", categoryName));
      consulta = getDocs(q);
    } else {
      consulta = getDocs(itemsCollection);
    }

    consulta.then((res) => {
      let products = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      setItems(products);
    });
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <BounceLoader
        color="#ff5c00"
        size={90}
        cssOverride={override}
      />
    );
  }

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
