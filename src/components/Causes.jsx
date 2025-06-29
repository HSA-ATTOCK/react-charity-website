import { Link } from "react-router-dom";

const causesData = [
  {
    id: 1,
    title: "Education for All",
    description:
      "Providing access to quality education for underprivileged children in rural areas.",
    raised: 12500,
    goal: 25000,
    image: "education.png",
  },
  {
    id: 2,
    title: "Clean Water Initiative",
    description:
      "Building wells and water purification systems in communities without access to clean water.",
    raised: 18000,
    goal: 30000,
    image: "water.jpg",
  },
  {
    id: 3,
    title: "Hunger Relief",
    description:
      "Providing meals and food supplies to families affected by poverty and natural disasters.",
    raised: 22000,
    goal: 40000,
    image: "hunger.jpg",
  },
  {
    id: 4,
    title: "Medical Aid",
    description:
      "Funding medical treatments and supplies for those who cannot afford healthcare.",
    raised: 15000,
    goal: 35000,
    image: "medical.jpg",
  },
];

const Causes = ({ showAll = true }) => {
  const displayedCauses = showAll ? causesData : causesData.slice(0, 3);

  return (
    <div className="causes-grid">
      {displayedCauses.map((cause) => (
        <div key={cause.id} className="cause-card">
          <div
            className="cause-image"
            style={{
              backgroundImage: `url(${require(`../components/images/${cause.image}`)})`,
            }}
          ></div>
          <div className="cause-content">
            <h3>{cause.title}</h3>
            <p>{cause.description}</p>

            <div className="progress-container">
              <div
                className="progress-bar"
                style={{
                  width: `${Math.min(100, (cause.raised / cause.goal) * 100)}%`,
                }}
              ></div>
            </div>

            <div className="cause-stats">
              <span>Raised: ${cause.raised.toLocaleString()}</span>
              <span>Goal: ${cause.goal.toLocaleString()}</span>
            </div>

            <Link to={`/donate?cause=${cause.id}`} className="btn btn-small">
              Donate Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Causes;
