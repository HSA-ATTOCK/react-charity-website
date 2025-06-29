import VolunteerForm from "../components/VolunteerForm";

const Volunteer = () => {
  return (
    <div className="volunteer-page">
      <section className="page-header">
        <div className="container">
          <h1>Become a Volunteer</h1>
          <p>
            Join our team of dedicated volunteers making a difference in
            communities around the world.
          </p>
        </div>
      </section>

      <section className="volunteer-info-section">
        <div className="container">
          <div className="volunteer-content">
            <div className="volunteer-benefits">
              <h2>Why Volunteer With Us?</h2>
              <p>
                Volunteering with Helping Hands is a rewarding experience that
                allows you to make a tangible difference in people's lives while
                developing new skills and forming lasting connections.
              </p>

              <h3>Volunteer Opportunities</h3>
              <ul>
                <li>Community outreach and education programs</li>
                <li>Disaster relief efforts</li>
                <li>Fundraising and event planning</li>
                <li>Administrative support</li>
                <li>
                  Skills-based volunteering (medical, legal, technical, etc.)
                </li>
                <li>International volunteer programs</li>
              </ul>

              <h3>Benefits of Volunteering</h3>
              <ul>
                <li>Make a meaningful impact in your community</li>
                <li>Gain valuable experience and skills</li>
                <li>Meet like-minded people</li>
                <li>Flexible scheduling options</li>
                <li>Opportunities for personal and professional growth</li>
              </ul>
            </div>

            <div className="volunteer-form-wrapper">
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Volunteer FAQs</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What are the requirements to volunteer?</h3>
              <p>
                Requirements vary by role, but generally we ask that volunteers
                be at least 18 years old (or accompanied by an adult if
                younger), complete an application, and pass a background check
                for certain positions.
              </p>
            </div>

            <div className="faq-item">
              <h3>How much time do I need to commit?</h3>
              <p>
                We have opportunities ranging from one-time events to regular
                weekly commitments. We'll work with you to find a schedule that
                fits your availability.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do you offer virtual volunteering opportunities?</h3>
              <p>
                Yes! We have several remote volunteer positions in areas like
                social media, graphic design, grant writing, and more.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can I volunteer as part of a corporate group?</h3>
              <p>
                Absolutely! We regularly host corporate volunteer days and can
                customize experiences for your team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
