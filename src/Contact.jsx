function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>

      <div className="contact-info">
        <h3> Address</h3>
        <p>
          3/134, Christian Line Rd,
          <br />
          Maria Puram,
          <br />
          Kadapa, Andhra Pradesh 516001
        </p>

        <h3> Working Hours</h3>
        <p>
          Monday - Saturday
          <br />
          9:30 AM – 2:30 PM , 4:00 - 9:00 PM
        </p>

        <p>
          Sunday
          <br />
          9:30 AM – 1:30 PM , 6:00 PM – 8:30 PM
          
        </p>
      </div>

      <form>
        <input
          type="text"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          placeholder="Email"
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
        />

        <textarea
          placeholder="Message"
          rows="5"
        ></textarea>

        <button type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;