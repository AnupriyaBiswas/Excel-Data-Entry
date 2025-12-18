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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 relative overflow-hidden">
      {/* Decorative gold stacks - positioned whimsically */}
      <img
        src="/gold-stack.jpg"
        alt=""
        className="absolute top-20 left-10 w-32 h-32 object-cover rounded-full opacity-20 blur-sm"
      />
      <img
        src="/gold-stack.jpg"
        alt=""
        className="absolute bottom-32 left-1/4 w-24 h-24 object-cover rounded-lg opacity-15 rotate-12"
      />
      <img
        src="/gold-stack.jpg"
        alt=""
        className="absolute top-1/3 right-1/4 w-28 h-28 object-cover rounded-full opacity-10"
      />

      {/* HEADER */}
      <header className="bg-black bg-opacity-50 backdrop-blur-md border-b border-amber-500 border-opacity-30">
        <div className="container mx-auto px-6 py-4 flex items-center gap-4">
          <img
            src="/unimoni-logo.jpg"
            alt="Unimoni Logo"
            className="h-12 w-auto"
          />
          <span className="text-amber-400 text-2xl font-bold tracking-wide">
            Gold Loan
          </span>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="container mx-auto px-6 py-16 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - Content and Form */}
          <div className="space-y-8 z-10">
            {/* Hero Text */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Gold Loan
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-amber-400">
                আপনার স্বপ্ন, আমাদের প্রতিশ্রুতি
              </h2>
              <div className="flex gap-4 text-amber-300 text-lg font-medium">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                  Fast
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                  Secure
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                  Trusted
                </span>
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-amber-500 border-opacity-30 shadow-2xl">
              <h3 className="text-2xl font-bold text-amber-400 mb-6">
                Apply Now
              </h3>
              <div className="space-y-4">
                <input
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-amber-500 border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-amber-500 border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                />
                <input
                  name="age"
                  type="number"
                  placeholder="Age"
                  value={form.age}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-amber-500 border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                />
                <button
                  onClick={submit}
                  className="w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-gray-900 font-bold rounded-lg hover:from-amber-400 hover:to-yellow-500 transform hover:scale-105 transition duration-200 shadow-lg"
                >
                  Submit Details
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Customer Image */}
          <div className="relative lg:flex justify-end hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-400 rounded-full opacity-20 blur-3xl"></div>
              <img
                src="/subject.png"
                alt="Happy Customer"
                className="relative w-full max-w-lg h-auto object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="absolute bottom-0 w-full bg-black bg-opacity-50 backdrop-blur-md border-t border-amber-500 border-opacity-30">
        <div className="container mx-auto px-6 py-4 text-center text-gray-300">
          © 2025 Unimoni | A Wiz Group Company
        </div>
      </footer>
    </div>
  );
}

export default App;