import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    document.title = "JuliusTech | Page Not Found";
  }, []);

  return (
    <section className="page empty-state large-empty-state">
      <p className="section-label">404</p>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist or may have been moved.</p>
      <Link to="/" className="primary-button">
        Go to home
      </Link>
    </section>
  );
};

export default NotFound;
