import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found">
      <h1>404</h1>

      <p>Sorry, the page you are looking for doesn't exist.</p>

      <Link to="/" className="shop-button">
        Go Home
      </Link>
    </section>
  );
}

export default NotFound;
