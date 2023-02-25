import "./ProductCard.css";
const ProductCard = ({ title, price, hayStock }) => {
  return (
    <div>
      <h1 className={hayStock ? "green" : "red"}>{title}</h1>
      <h2>{price}</h2>
    </div>
  );
};

export default ProductCard;
