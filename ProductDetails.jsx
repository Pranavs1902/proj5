import { Link, useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <section className="not-found">
        <h1>Product Not Found</h1>
        <Link to="/products">Back to Products</Link>
      </section>
    );
  }

  return (
    <section className="details">
      <img
        src={product.image}
        alt={product.name}
      />

      <div>
        <span>{product.category}</span>

        <h1>{product.name}</h1>

        <p className="price">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

        <p>{product.description}</p>

        <button className="shop-button">
          Add to Cart
        </button>
      </div>
    </section>
  );
}

export default ProductDetails;
