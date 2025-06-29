import { Link } from "react-router-dom";
import HeroImage from "../pages/images/hero.jpg";
import Testimonials from "../components/Testimonials";
import Causes from "../components/Causes";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="hero-content">
          <h1>Together We Can Make a Difference</h1>
          <p>
            Join us in our mission to help those in need and create positive
            change in communities worldwide.
          </p>
          <div className="hero-buttons">
            <Link to="/donate" className="btn btn-primary">
              Donate Now
            </Link>
            <Link to="/volunteer" className="btn btn-secondary">
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h2>About Helping Hands</h2>
            <p>
              Helping Hands is a non-profit organization dedicated to improving
              lives through charitable actions. Founded in 2010, we've helped
              over 50,000 people across 20 countries through our various
              programs and initiatives.
            </p>
            <Link to="/about" className="btn btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="causes-section">
        <div className="container">
          <h2>Our Causes</h2>
          <Causes showAll={false} />
          <div className="text-center">
            <Link to="/causes" className="btn btn-primary">
              View All Causes
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Make a Difference?</h2>
          <p>Your contribution can change lives. Join us today!</p>
          <div className="cta-buttons">
            <Link to="/donate" className="btn btn-primary">
              Donate Now
            </Link>
            <Link to="/volunteer" className="btn btn-secondary">
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
