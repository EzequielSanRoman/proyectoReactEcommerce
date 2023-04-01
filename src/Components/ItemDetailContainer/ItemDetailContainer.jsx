import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

import ItemCount from "../ItemCount/ItemCount";
import Swal from "sweetalert2";

import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);

  const [productSelected, setProductsSelected] = useState({});

  useEffect(() => {
    const itemCollection = collection(db, "products");
    const ref = doc(itemCollection, id);
    getDoc(ref).then((res) => {
      setProductsSelected({
        ...res.data(),
        id: res.id,
      });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let producto = {
      ...productSelected,
      quantity: cantidad,
    };
    agregarAlCarrito(producto);
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "¡Se agregó al carrito!",
      showConfirmButton: false,
      timer: 800,
    });
  };
  let quantity = getQuantityById(Number(id));

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

export default ItemDetailContainer;
