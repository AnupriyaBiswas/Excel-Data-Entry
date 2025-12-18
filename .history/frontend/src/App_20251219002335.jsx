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

  const downloadExcel = () => {
    window.open(`${BACKEND_URL}/download`, "_blank");
  };

  return (
    <div className="page">
      {/* HEADER */}
      <header className="header">
        <img src="/src/assets/unimoni-logo.jpg" alt="Unimoni" />
        <span>Gold Loan</span>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>Gold Loan</h1>
          <h2>আপনার স্বপ্ন, আমাদের প্রতিশ্রুতি</h2>
          <p>Fast • Secure • Trusted</p>
        </div>

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

          <button className="download-btn" onClick={downloadExcel}>
            Download Excel
          </button>
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
