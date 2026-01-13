import React, { useState } from "react";

function SignupPopup({ onClose, onSignupSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (data.success) {
      setMsg("Signup successful!");
      setTimeout(() => {
      onSignupSuccess();
      onClose();
    },1200);}
     else {
      setMsg(data.message || "Signup failed");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white text- black p-6 rounded shadow w-80">
        <h2 className="text-xl text-black font-bold mb-3">Signup</h2>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name"
            className="w-full border p-2 mb-3 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 mb-3 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 mb-3 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="w-full bg-blue-600 text-white p-2 rounded">
            Signup
          </button>
        </form>

        {msg && <p className="text-sm text-center mt-2 text-green-600">{msg}</p>}

        <button
          onClick={onClose}
          className="mt-3 text-red-600 underline w-full text-center hover:bg-green-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default SignupPopup;
