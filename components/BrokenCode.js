import React, { useState } from "react";
import Link from "next/link";

const BrokenCode = ({ name, handleChange }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <h3>Welcome to the Ample Coding Challenge</h3>
      <br />
      {!name && (
        <div>
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Enter your name"
          />
          <button onClick={() => handleChange(value)}>Submit</button>
        </div>
      )}
      {name && (
        <div>
          <h1>Hi {name}</h1>
          <br />
          <Link href="/character">
            <button>Get random character info</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BrokenCode;
