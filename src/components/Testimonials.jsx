import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Volunteer",
    content:
      "Volunteering with Helping Hands has been one of the most rewarding experiences of my life. The impact we make together is truly inspiring.",
    image: "testimonial1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Donor",
    content:
      "I've been donating to Helping Hands for 5 years because I can see exactly how my contributions are making a difference in people's lives.",
    image: "testimonial2.jpg",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Beneficiary",
    content:
      "When my family lost everything in the flood, Helping Hands was there to provide food, shelter, and hope for a better tomorrow.",
    image: "testimonial3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>What People Say About Us</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <FaQuoteLeft className="quote-icon" />
                <p>{testimonial.content}</p>
              </div>
              <div className="testimonial-author">
                <div
                  className="author-image"
                  style={{
                    backgroundImage: `url(${require(`../components/images/${testimonial.image}`)})`,
                  }}
                ></div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
