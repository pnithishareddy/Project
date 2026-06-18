import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Medicines from "./Medicines";
import Login from "./Login";
import Signup from "./Signup";
import "./App.css"
import BookAppointment from "./BookAppointment";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Header />

      <Routes>
         <Route path="/services" element={<Services />} />
  <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/appointment" element={<BookAppointment />} />
      </Routes>
    </>
  );
}

export default App;