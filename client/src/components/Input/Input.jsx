import React, { useState } from "react";
import "./Input.css";
const Input = () => {
  const [json, setJson] = useState("");

  const handleSubmit = () => {
    if (json.trim().length === 0) return;

  };
  return (
    <div className="input">
      <form onSubmit={handleSubmit}>
        <textarea rows="10" onChange={(e) => setJson(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Input;
