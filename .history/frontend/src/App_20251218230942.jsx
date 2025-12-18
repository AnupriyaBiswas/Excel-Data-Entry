import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: ""
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    await fetch("http://localhost:3000/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    alert("Saved to Excel");
    setForm({ name: "", email: "", age: "" });
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Excel Form</h2>
      <form onSubmit={submit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required /><br /><br />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required /><br /><br />
        <input name="age" value={form.age} onChange={handleChange} placeholder="Age" /><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
