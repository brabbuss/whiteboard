import React, { useState } from "react";
import CoolThings from "./CoolThings";

const BrokenCode = ({ name, handleChange }) => {
  const [show, setShow] = useState(false);
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
          <button onClick={() => setShow(!show)}>
            {show ? "Hide Info" : "Get random character info"}
          </button>
        </div>
      )}

      {show && (
        <section>
          <br />
          <CoolThings show={show} setShow={setShow} />
        </section>
      )}
    </div>
  );
};

export default BrokenCode;
