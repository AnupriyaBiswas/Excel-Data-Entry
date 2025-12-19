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
      minHeight: "100vh",
      width: "100vw",
      overflowX: "hidden",
      background: "linear-gradient(120deg, #0c0c0c, #1b1b1b)",
      color: "white",
      display: "flex",
      flexDirection: "column",

    }}>
      {/* HEADER */}
      <header style={{
        display: "flex",
        alignItems: "center",
        padding: "15px 60px",
        gap: "15px",
        width: "100vw",
        borderBottom: "1px solid rgba(245, 193, 108, 0.2)",

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
        alignItems: "center",
        flex: 1,
        width: "100%",
      }}>
        {/* LEFT SIDE - Content and Form */}
        <div style={{
          maxWidth: "520px",
          width: "100%",
          padding: "30px 60px",
          boxSizing: "border-box",

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
            maxWidth: "500%",
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
          flex: "0 0 45%",
          maxWidth: "45%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingRight: "40px",
        }}>
          <img
            src="/subject.png"
            alt="Happy Customer"
            style={{
              width: "100%",
              maxWidth: "520px",
              height: "auto",
              objectFit: "contain",
              borderRadius: "14px",
              boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
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
        * {
    box-sizing: border-box;
  }
  
  body, html {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    width: 100%;
  }
  
  @media (max-width: 768px) {
    header {
      padding: 15px 20px !important;
      gap: 10px !important;
    }
    
    header img {
      height: 30px !important;
    }
    
    header span {
      font-size: 28px !important;
    }
    
    section {
      flex-direction: column !important;
      align-items: center !important;
    }
    
    section > div:first-child {
    padding: 20px !important;
    width: 100% !important;
  }
    
    section > div:first-child > div:first-child h1 {
      font-size: 32px !important;
    }
    
    section > div:first-child > div:first-child h2 {
      font-size: 18px !important;
    }
    
    section > div:first-child > div:last-child {
      padding: 20px !important;
      max-width: 100% !important;
      width: 100% !important;
      box-sizing: border-box !important;
    }
    
    section > div:first-child > div:last-child input,
    section > div:first-child > div:last-child button {
      box-sizing: border-box !important;
    }
    
    section > div:last-child {
    order: 2;
    width: 90% !important;          
    max-width: 420px !important;    
    height: 260px !important;
    margin: 20px auto 0 auto !important;
    overflow: hidden !important;
    border-radius: 16px !important;
    transform: translateX(15px);
  }
    
    section > div:last-child img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    border-radius: 10px !important;
    margin-bottom: 24px !important;
  }
  }

      `}</style>
    </div>
  );
}

export default App;