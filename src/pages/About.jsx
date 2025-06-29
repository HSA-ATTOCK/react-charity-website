import TeamImage from "../pages/images/team.jpg";
import MissionImage from "../pages/images/mission.jpg";
import { FaUsers, FaHandHoldingHeart, FaGlobeAmericas } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>About Helping Hands</h1>
          <p>
            Learn more about our mission, vision, and the team behind our
            organization.
          </p>
        </div>
      </section>

      <section className="our-story-section">
        <div className="container">
          <div className="section-content">
            <div className="content-text">
              <h2>Our Story</h2>
              <p>
                Helping Hands was founded in 2010 by a group of friends who
                wanted to make a difference in their community. What started as
                a small local initiative has grown into an international
                organization with operations in over 20 countries.
              </p>
              <p>
                Our journey began with a single food drive that helped feed 50
                families during the holidays. Today, we run multiple programs
                addressing education, healthcare, clean water, and disaster
                relief worldwide.
              </p>
            </div>
            <div className="content-image">
              <img src={TeamImage} alt="Our team" />
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision-section">
        <div className="container">
          <div className="section-content reversed">
            <div className="content-text">
              <h2>Mission & Vision</h2>
              <p>
                <strong>Our Mission:</strong> To empower communities and
                transform lives through sustainable charitable programs that
                address immediate needs while creating long-term solutions.
              </p>
              <p>
                <strong>Our Vision:</strong> A world where every person has
                access to basic necessities, education, and opportunities to
                thrive.
              </p>
              <p>
                We believe in transparency, accountability, and the power of
                collective action to create meaningful change.
              </p>
            </div>
            <div className="content-image">
              <img src={MissionImage} alt="Our mission" />
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <h2>By The Numbers</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <FaUsers className="stat-icon" />
              <h3>5,000+</h3>
              <p>Volunteers Worldwide</p>
            </div>
            <div className="stat-card">
              <FaHandHoldingHeart className="stat-icon" />
              <h3>50,000+</h3>
              <p>Lives Impacted</p>
            </div>
            <div className="stat-card">
              <FaGlobeAmericas className="stat-icon" />
              <h3>20+</h3>
              <p>Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Compassion</h3>
              <p>We approach every situation with empathy and understanding.</p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <p>
                We maintain the highest ethical standards in all our actions.
              </p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We constantly seek creative solutions to complex problems.</p>
            </div>
            <div className="value-card">
              <h3>Collaboration</h3>
              <p>
                We believe in the power of partnerships to amplify our impact.
              </p>
            </div>
            <div className="value-card">
              <h3>Sustainability</h3>
              <p>We focus on solutions that create lasting change.</p>
            </div>
            <div className="value-card">
              <h3>Accountability</h3>
              <p>
                We are transparent and responsible for our actions and results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
