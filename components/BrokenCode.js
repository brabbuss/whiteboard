import React, { useState } from 'react'
import CoolThings from './CoolThings'

const BrokenCode = (props) => {

  const [show, setshow] = useState(false)
  const [value, setValue] = useState(0)

  const updateValue = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <h1>Hi {name}</h1>
      <h3>Welcome to the Ample Coding Challenge</h3>

      <button onClick={show(!show)}>
        Show More
      </button>

      {show ? (
        <p>Congrats! You got me to show!</p>
        <input value={value} onChange={(e) => updateValue(e)} placeholder="0" />
        <CoolThings show={show} setShow={setShow} />
      ) : (
        <p>Hmmm. Something is supposed to be here.</p>
      )}



    </div>
  )
}

export default BrokenCode
