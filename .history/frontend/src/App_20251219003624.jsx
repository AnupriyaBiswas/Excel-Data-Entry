import { useState } from "react";
import "./App.css";

const BACKEND_URL = "https://excel-data-entry.onrender.com";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BACKEND_URL}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!res.ok) throw new Error();
      alert("Details submitted successfully");

      setForm({ name: "", email: "", age: "" });
    } catch {
      alert("Submission failed");
    }
  };

  return (
    <div className="page">
      {/* HEADER */}
      <header className="header">
        <img
          src="/unimoni-logo.jpg"
          alt="Unimoni Logo"
          className="logo"
        />
        <span className="header-title">Gold Loan</span>
      </header>

      {/* HERO SECTION */}
      <section
        className="hero"
        style={{
          backgroundImage: "url('/gold-stack.jpg')"
        }}
      >
        {/* LEFT SIDE */}
        <div className="hero-left">
          <h1>Gold Loan</h1>
          <h2>আপনার স্বপ্ন, আমাদের প্রতিশ্রুতি</h2>
          <p>Fast • Secure • Trusted</p>

          <div className="form-card">
            <h3>Apply Now</h3>

            <form onSubmit={submit}>
              <input
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
              />

              <input
                name="age"
                placeholder="Age"
                value={form.age}
                onChange={handleChange}
              />

              <button type="submit">Submit Details</button>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hero-right">
          <img
            src="/subject.png"
            alt="Customer"
            className="hero-image"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2025 Unimoni | A Wiz Group Company
      </footer>
    </div>
  );
}

export default App;
