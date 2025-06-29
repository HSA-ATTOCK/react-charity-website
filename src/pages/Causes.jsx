import CausesComponent from "../components/Causes";
import { FaChild, FaTint, FaAppleAlt, FaHeartbeat } from "react-icons/fa";

const Causes = () => {
  return (
    <div className="causes-page">
      <section className="page-header">
        <div className="container">
          <h1>Our Causes</h1>
          <p>
            Discover the initiatives we're passionate about and how you can help
            make a difference.
          </p>
        </div>
      </section>

      <section className="all-causes-section">
        <div className="container">
          <h2>Current Campaigns</h2>
          <CausesComponent showAll={true} />
        </div>
      </section>

      <section className="focus-areas-section">
        <div className="container">
          <h2>Our Focus Areas</h2>
          <div className="focus-grid">
            <div className="focus-card">
              <div className="focus-icon">
                <FaChild />
              </div>
              <h3>Education</h3>
              <p>
                Providing access to quality education for children in
                underserved communities through school construction, teacher
                training, and scholarship programs.
              </p>
            </div>
            <div className="focus-card">
              <div className="focus-icon">
                <FaTint />
              </div>
              <h3>Clean Water</h3>
              <p>
                Implementing sustainable water solutions including wells,
                filtration systems, and hygiene education to combat waterborne
                diseases.
              </p>
            </div>
            <div className="focus-card">
              <div className="focus-icon">
                <FaAppleAlt />
              </div>
              <h3>Hunger Relief</h3>
              <p>
                Operating food banks, community kitchens, and agricultural
                programs to ensure food security for vulnerable populations.
              </p>
            </div>
            <div className="focus-card">
              <div className="focus-icon">
                <FaHeartbeat />
              </div>
              <h3>Healthcare</h3>
              <p>
                Supporting medical clinics, vaccination programs, and health
                education initiatives in areas with limited access to
                healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="impact-section">
        <div className="container">
          <h2>Our Impact</h2>
          <div className="impact-content">
            <p>
              Since our founding, we've been able to make a tangible difference
              in communities around the world. Here are some of our recent
              achievements:
            </p>
            <ul>
              <li>Built 15 schools serving over 3,000 students annually</li>
              <li>Provided clean water to 25 villages through 50 new wells</li>
              <li>Distributed over 1 million meals to families in need</li>
              <li>Funded medical treatments for 500 patients</li>
              <li>Trained 200 local community health workers</li>
            </ul>
            <p>
              These results are only possible through the generous support of
              donors like you. Every contribution, no matter the size, helps us
              create meaningful change.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Causes;
