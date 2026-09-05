import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
      />

      <div className="product-info">
        <span>{product.category}</span>

        <h3>{product.name}</h3>

        <p className="price">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="view-button"
        >
          View Product
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
