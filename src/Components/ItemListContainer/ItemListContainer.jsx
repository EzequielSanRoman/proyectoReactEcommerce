import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  let productsList = undefined;
  if (categoryName) {
    productsList = products.filter(
      (elemento) => elemento.category === categoryName
    );
  } else {
    productsList = products;
  }

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(productsList);
    });

    productList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryName]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
