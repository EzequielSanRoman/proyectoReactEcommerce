import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);

  const precioTotal = getTotalPrice();
  const clear = () => {
    Swal.fire({
      title: "¿Querés vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "OK",
      denyButtonText: `MANTENER`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("BORRADO!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("SE CONSERVAN LOS PRODUCTOS", "", "info");
      }
    });
  };

  return (
    <div
      style={{
        width: "70%",
        justifyContent: "space-evenly",
      }}
    >
      {cart.map((elemento) => {
        return (
          <div
            style={{
              margin: "15px",
              justifyContent: "space-arrownd",
              borderRadius: "10px",
              backgroundColor: "white",
              alignItems: "center",
              display: "flex",
              border: "1px solid grey",
            }}
            key={elemento.id}
          >
            <h2>{elemento.title}</h2>
            <img src={elemento.img} alt="" style={{ width: "200px" }} />
            <h3>Cantidad {elemento.quantity}</h3>
            <h2>{elemento.price}</h2>
            <button
              color="secondary"
              variant="contained"
              onClick={() => deleteProductById(elemento.id)}
            >
              ELIMINAR
            </button>
          </div>
        );
      })}
      <h1
        style={{
          fontFamily: "Segoe UI Symbol",
        }}
      >
        Total $ {precioTotal}
      </h1>

      {cart.length > 0 && (
        <div className="btn-cart">
          <button variant="contained">Comprar</button>
          <button onClick={clear} variant="contained">
            Vaciar
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
