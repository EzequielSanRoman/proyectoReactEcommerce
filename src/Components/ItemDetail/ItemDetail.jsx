import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ productSelected, onAdd, quantity }) => {
  return (
    <div
      style={{
        padding: "5px",
        margin: "15px",
        justifyContent: "space-arrownd",
        borderRadius: "10px",
        backgroundColor: "white",
        alignItems: "center",

        border: "1px solid grey",
      }}
    >
      <h1>{productSelected.title}</h1>
      <img src={productSelected.img} alt="" style={{ width: "300px" }} />
      <h3>{productSelected.description}</h3>
      <h2>{productSelected.price}</h2>
      <ItemCount
        stock={productSelected.stock}
        onAdd={onAdd}
        initial={quantity}
      />
    </div>
  );
};

export default ItemDetail;
