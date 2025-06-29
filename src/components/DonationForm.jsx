import { useState } from "react";

const DonationForm = () => {
  const [formData, setFormData] = useState({
    amount: "",
    frequency: "one-time",
    name: "",
    email: "",
    paymentMethod: "credit-card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
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
    // Here you would typically send the data to your backend
    console.log("Donation submitted:", formData);
    alert("Thank you for your donation!");
    // Reset form
    setFormData({
      amount: "",
      frequency: "one-time",
      name: "",
      email: "",
      paymentMethod: "credit-card",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    });
  };

  return (
    <form className="donation-form" onSubmit={handleSubmit}>
      <h3>Make a Donation</h3>

      <div className="form-group">
        <label>Amount ($)</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Donation Frequency</label>
        <select
          name="frequency"
          value={formData.frequency}
          onChange={handleChange}
        >
          <option value="one-time">One Time</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

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
        <label>Payment Method</label>
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
        >
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bank-transfer">Bank Transfer</option>
        </select>
      </div>

      {formData.paymentMethod === "credit-card" && (
        <>
          <div className="form-group">
            <label>Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>CVV</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </>
      )}

      <button type="submit" className="btn btn-primary">
        Donate Now
      </button>
    </form>
  );
};

export default DonationForm;
