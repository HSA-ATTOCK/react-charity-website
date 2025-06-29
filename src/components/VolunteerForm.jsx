import { useState } from "react";

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    skills: "",
    availability: "",
    interests: [],
  });

  const interestOptions = [
    "Fundraising",
    "Event Planning",
    "Teaching",
    "Construction",
    "Healthcare",
    "Administration",
    "Marketing",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedInterests = [...formData.interests];

    if (checked) {
      updatedInterests.push(value);
    } else {
      updatedInterests = updatedInterests.filter((item) => item !== value);
    }

    setFormData((prev) => ({
      ...prev,
      interests: updatedInterests,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Volunteer application submitted:", formData);
    alert(
      "Thank you for your interest in volunteering! We will contact you soon."
    );
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      skills: "",
      availability: "",
      interests: [],
    });
  };

  return (
    <form className="volunteer-form" onSubmit={handleSubmit}>
      <h3>Volunteer Application</h3>

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
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Skills/Qualifications</label>
        <textarea
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Availability</label>
        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          required
        >
          <option value="">Select Availability</option>
          <option value="weekdays">Weekdays</option>
          <option value="weekends">Weekends</option>
          <option value="both">Both</option>
          <option value="flexible">Flexible</option>
        </select>
      </div>

      <div className="form-group">
        <label>Areas of Interest (Select all that apply)</label>
        <div className="checkbox-group">
          {interestOptions.map((option) => (
            <label key={option} className="checkbox-label">
              <input
                type="checkbox"
                value={option}
                checked={formData.interests.includes(option)}
                onChange={handleCheckboxChange}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit Application
      </button>
    </form>
  );
};

export default VolunteerForm;
