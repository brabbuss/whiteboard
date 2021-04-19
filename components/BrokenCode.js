import React, { useState } from "react";
import CoolThings from "./CoolThings";

const BrokenCode = ({ name, handleChange }) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [detailsJSX, setDetailsJSX] = useState(null)

  const fetchInfo = async () => {
    // 87 total IDs
    const randomCharID = Math.floor(Math.random() * 88).toFixed(0)
    const res = await fetch(`https://swapi.py4e.com/api/people/${randomCharID}`)
    const data = await res.json()
    return data
  }
  
	const buildJSX = (info) => {
    if (info.detail) setDetailsJSX(<div>failed to load</div>)
    if (!info) setDetailsJSX(<div>loading...</div>)
    console.log(info)
    setDetailsJSX(<CoolThings character={info}/>)
  }

  const handleClick = async () => {
    const info = await fetchInfo()
    buildJSX(info)
    setShow(!show)
  }

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
          <button onClick={handleClick}>
            {show ? "Hide Info" : "Get random character info"}
          </button>
          <br />
          {show && detailsJSX && detailsJSX}
        </div>
      )}
    </div>
  );
};

export default BrokenCode;
