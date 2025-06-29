import DonationForm from "../components/DonationForm";

const Donate = () => {
  return (
    <div className="donate-page">
      <section className="page-header">
        <div className="container">
          <h1>Donate to Our Cause</h1>
          <p>
            Your generous donation helps us continue our mission to help those
            in need.
          </p>
        </div>
      </section>

      <section className="donation-section">
        <div className="container">
          <div className="donation-content">
            <div className="donation-info">
              <h2>Why Donate?</h2>
              <p>
                Every dollar you donate goes directly to funding our programs
                and initiatives that make a real difference in people's lives.
                Here's what your donation can provide:
              </p>
              <ul>
                <li>$25 can provide a child with school supplies for a year</li>
                <li>$50 can feed a family for a week</li>
                <li>$100 can provide clean water to a village for a month</li>
                <li>$500 can fund a medical treatment for someone in need</li>
              </ul>
              <p>
                We are a registered 501(c)(3) non-profit organization, and all
                donations are tax-deductible.
              </p>
            </div>

            <div className="donation-form-wrapper">
              <DonationForm />
            </div>
          </div>
        </div>
      </section>

      <section className="other-ways-section">
        <div className="container">
          <h2>Other Ways to Give</h2>
          <div className="ways-grid">
            <div className="way-card">
              <h3>Monthly Giving</h3>
              <p>
                Become a monthly donor and provide sustained support for our
                programs.
              </p>
              <button className="btn btn-outline">Learn More</button>
            </div>

            <div className="way-card">
              <h3>Corporate Matching</h3>
              <p>
                Many employers match charitable donations. Double your impact!
              </p>
              <button className="btn btn-outline">Learn More</button>
            </div>

            <div className="way-card">
              <h3>Planned Giving</h3>
              <p>Include Helping Hands in your will or estate plans.</p>
              <button className="btn btn-outline">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
