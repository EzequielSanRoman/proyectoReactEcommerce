import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css";
import { Link } from "react-router-dom";

const CartWidget = ({ numero }) => {
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
          <span>0</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
