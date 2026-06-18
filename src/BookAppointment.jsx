function BookAppointment() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment Booked Successfully!");
  };

  return (
    <div className="appointment-page">
      <div className="appointment-card">
        <h2>Book Appointment</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Pincode" required />
          <input type="number" placeholder="Age" required />

          <select required>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input type="date" required />

          <textarea
            rows="4"
            placeholder="Disease / Symptoms Details"
            required
          ></textarea>

          <textarea
            rows="3"
            placeholder="Previous Treatments"
          ></textarea>

          <button type="submit">Confirm Appointment</button>
        </form>
      </div>
    </div>
  );
}

export default BookAppointment;