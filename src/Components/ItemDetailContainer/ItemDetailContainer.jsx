import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productSelected = products.find((element) => element.id === Number(id));
  const onAdd = (cantidad) => {
    console.log(`se agrego al carrito ${cantidad} productos`);
  };
  return (
    <div>
      <h1>{productSelected.tittle}</h1>
      <img src={productSelected.img} alt="" />
      <h3>{productSelected.description}</h3>
      <h2>{productSelected.price}</h2>
      <ItemCount stock={productSelected.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
