import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-label">LEARN AT YOUR OWN PACE</p>
          <h1>Build practical tech skills one course at a time.</h1>
          <p>
            JuliusTech brings beginner-friendly courses together in one simple learning platform.
          </p>
          <div className="hero-actions">
            <Link to="/courses" className="primary-button light-button">
              Browse courses
            </Link>
            <Link to="/register" className="hero-link">
              Create a student profile
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <p className="hero-card-title">Popular learning areas</p>
          <ul>
            <li>Frontend development</li>
            <li>Backend development</li>
            <li>UI/UX design</li>
            <li>Mobile development</li>
          </ul>
          <p className="hero-card-note">Choose a course, learn the basics, and track your progress.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
