import { useState } from "react";

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

  const submit = async () => {
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
    <div style={{
      height: "100vh",
      background: "linear-gradient(120deg, #0c0c0c, #1b1b1b)",
      color: "white",
      display: "flex",
      flexDirection: "column"
    }}>
      {/* HEADER */}
      <header style={{
        display: "flex",
        alignItems: "center",
        padding: "15px 60px",
        gap: "15px",
        borderBottom: "1px solid rgba(245, 193, 108, 0.2)"
      }}>
        <img
          src="/unimoni-logo.jpg"
          alt="Unimoni Logo"
          style={{ height: "40px" }}
        />
        <span style={{
          fontSize: "50px",
          fontWeight: "1200",
          color: "#f5c16c"
        }}>
          Unimoni
        </span>
      </header>

      {/* HERO SECTION */}
      <section style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "30px 60px",
        gap: "60px",
        flex: 1,
        minHeight: 0
      }}>
        {/* LEFT SIDE - Content and Form */}
        <div style={{ 
          maxWidth: "100%",
          flex: "0 0 auto"
        }}>
          {/* Hero Text */}
          <div style={{ marginBottom: "25px" }}>
            <h1 style={{
              fontSize: "clamp(36px, 4.5vw, 56px)",
              color: "#f5c16c",
              marginBottom: "8px",
              lineHeight: "1.2"
            }}>
              Gold Loan
            </h1>
            <h2 style={{
              fontSize: "clamp(18px, 2.2vw, 26px)",
              marginBottom: "12px",
              fontWeight: "400"
            }}>
              আপনার স্বপ্ন, আমাদের প্রতিশ্রুতি
            </h2>
          </div>

          {/* Form Card */}
          <div style={{
            background: "rgba(0, 0, 0, 0.75)",
            borderRadius: "16px",
            padding: "25px",
            width: "100%",
            maxWidth: "100%",
            boxShadow: "0 0 25px rgba(245, 193, 108, 0.25)",
            border: "1px solid rgba(245, 193, 108, 0.3)"
          }}>
            <h3 style={{
              textAlign: "center",
              marginTop: "none",
              marginBottom: "20px",
              color: "#f5c16c",
              fontSize: "22px",
              fontWeight: "600"
            }}>
              Apply Now
            </h3>
            
            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "6px",
                marginBottom: "12px",
                borderRadius: "6px",
                border: "none",
                fontSize: "14px",
                outline: "none"
              }}
            />
            
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "6px",
                marginBottom: "12px",
                borderRadius: "6px",
                border: "none",
                fontSize: "14px",
                outline: "none"
              }}
            />
            
            <input
              name="age"
              type="number"
              placeholder="Age"
              value={form.age}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "6px",
                marginBottom: "16px",
                borderRadius: "6px",
                border: "none",
                fontSize: "14px",
                outline: "none"
              }}
            />
            
            <button
              onClick={submit}
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "6px",
                background: "#f5c16c",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "15px",
                color: "#000",
                transition: "all 0.3s"
              }}
              onMouseOver={(e) => e.target.style.background = "#ffce7a"}
              onMouseOut={(e) => e.target.style.background = "#f5c16c"}
            >
              Submit Details
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - Customer Image */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: "1 1 auto",
          height: "100%",
          minHeight: 0
        }}>
          <img
            src="/subject.png"
            alt="Happy Customer"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              width: "auto",
              height: "auto",
              objectFit: "contain",
              borderRadius: "12px",
              boxShadow: "0 10px 40px rgba(245, 193, 108, 0.2)"
            }}
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        textAlign: "center",
        padding: "12px 20px",
        fontSize: "13px",
        opacity: "0.7",
        borderTop: "1px solid rgba(245, 193, 108, 0.2)"
      }}>
        © 2025 Unimoni | A Wiz Group Company
      </footer>
      
      {/* Mobile/Tablet Media Query Styles */}
      <style>{`
        @media (max-width: 768px) {
          header {
            padding: 15px 20px !important;
          }
          header img {
            height: 35px !important;
          }
          section {
            flex-direction: column !important;
            padding: 20px !important;
            gap: 20px !important;
          }
          section > div:last-child {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;