import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import "./Cart.css";
import Swal from "sweetalert2";
import FormCheckout from "../FormCheckout/FormCheckout";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);

  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null);

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

  if (orderId) {
    return (
      <div>
        <h1>¡Muchas gracias por tu compra!</h1>
        <h2>Npumero de operación : {orderId}</h2>
        <Link to="/">Continuar comprando</Link>
      </div>
    );
  }
  if (cart.length === 0) {
    return (
      <div>
        <img
          src="https://res.cloudinary.com/dzckfmdr9/image/upload/v1680568704/undraw_Flying_drone_u3r2_xdozyv.png"
          alt=""
        />
      </div>
    );
  }
  return (
    <div className="cart-container">
      {!showForm ? (
        <div
          className="container-items"
          style={{
            width: "70%",
            justifyContent: "space-evenly",
          }}
        >
          {cart.map((elemento) => {
            return (
              <div className="cart-item" key={elemento.id}>
                <h2>{elemento.title}</h2>
                <img src={elemento.img} alt="" style={{ width: "200px" }} />
                <h3>Cantidad {elemento.quantity}</h3>
                <h2>{elemento.price}</h2>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => deleteProductById(elemento.id)}
                >
                  Elimiar
                </Button>
              </div>
            );
          })}

          <div className="cart-info">
            <h3>Subtotal ${getTotalPrice()}</h3>

            {cart.length > 0 && (
              <div className="btn-cart">
                <Button variant="contained" onClick={() => setShowForm(true)}>
                  Terminar la compra
                </Button>
                <Button onClick={clear} variant="contained">
                  Vaciar carrito
                </Button>
              </div>
            )}

            <h1>PRECIO TOTAL ${getTotalPrice()}</h1>
          </div>
        </div>
      ) : (
        <FormCheckout
          cart={cart}
          getTotalPrice={getTotalPrice}
          setOrderId={setOrderId}
          clearCart={clearCart}
        />
      )}
    </div>
  );
};

export default Cart;
