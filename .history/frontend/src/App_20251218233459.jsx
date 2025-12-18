import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async e => {
    e.preventDefault();

    try {
      const res = await fetch("https://excel-data-entry-frontend.onrender.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!res.ok) throw new Error("Submission failed");

      alert("Data saved to Excel");
      setForm({ name: "", email: "", age: "" });
    } catch (err) {
      alert("Error submitting form");
    }
  };

  const downloadExcel = () => {
    window.open("https://excel-data-entry-frontend.onrender.com/download", "_blank");
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Excel Data Entry Form</h2>

      <form onSubmit={submit}>
        <div>
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <br />

        <div>
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <br />

        <div>
          <input
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
          />
        </div>
        <br />

        <button type="submit">Submit</button>
      </form>

      <br />

      <button onClick={downloadExcel}>
        Download Excel File
      </button>
    </div>
  );
}

export default App;
