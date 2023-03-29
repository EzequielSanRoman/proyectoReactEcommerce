import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  const total = getTotalQuantity();

  return (
    <Link style={{ textDecoration: "none" }} to="/Cart">
      <div className="container-cart">
        <FaShoppingCart
          style={{
            margin: "10px",
            fontSize: "2rem",
            color: "white",
          }}
        />
        <div className="bubble-counter">
          <span>{total}</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
