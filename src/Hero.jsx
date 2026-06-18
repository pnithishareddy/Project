import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <h1>Natural Healing Through Homeopathy</h1>

      <p>
        Safe, effective and personalized homeopathic treatments for all ages.
      </p>

      <Link to="/appointment">
        <button>Book Appointment</button>
      </Link>
    </section>
  );
}

export default Hero;