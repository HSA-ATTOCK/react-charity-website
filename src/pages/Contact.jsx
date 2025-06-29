import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you! Reach out with questions, comments, or
            partnership inquiries.
          </p>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Address</h3>
              <p>123 Charity Street</p>
              <p>New York, NY 10001</p>
              <p>United States</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <h3>Phone</h3>
              <p>Main Office: (123) 456-7890</p>
              <p>Donations: (123) 456-7891</p>
              <p>Volunteering: (123) 456-7892</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <p>General: info@helpinghands.org</p>
              <p>Support: support@helpinghands.org</p>
              <p>Partnerships: partners@helpinghands.org</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <FaClock />
              </div>
              <h3>Hours</h3>
              <p>Monday-Friday: 9am - 5pm</p>
              <p>Saturday: 10am - 2pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="section-content">
            <div className="form-container">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
            <div className="map-container">
              <h2>Find Us</h2>
              <div className="map-embed">
                {/* In a real app, you would embed a Google Map or similar here */}
                <div className="map-placeholder">
                  <p>Map would be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-contact-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How can I get a receipt for my donation?</h3>
              <p>
                All donors receive an automatic email receipt immediately after
                making a donation. If you need another copy, please email
                donations@helpinghands.org with your full name and donation
                date.
              </p>
            </div>
            <div className="faq-item">
              <h3>How do I update my recurring donation?</h3>
              <p>
                You can update or cancel your recurring donation at any time by
                contacting our donations team at donations@helpinghands.org or
                calling (123) 456-7891.
              </p>
            </div>
            <div className="faq-item">
              <h3>How long does it take to process volunteer applications?</h3>
              <p>
                We typically process volunteer applications within 5-7 business
                days. For positions requiring background checks, the process may
                take up to 2 weeks.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I visit your projects in person?</h3>
              <p>
                We welcome visitors to many of our projects with prior
                arrangement. Please contact us at least 2 weeks in advance to
                schedule a visit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
