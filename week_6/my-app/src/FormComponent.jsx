import React, { useState, useRef } from "react";

function FormComponent() {
  const [items, setItems] = useState([]);
  const [username, setUsername] = useState("");
  const inputRef = useRef(null);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = inputRef.current.value;
    if (newItem) {
      setItems([...items, newItem]);
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <h2>Form with Validation and Event Handling</h2>
      <form onSubmit={handleSubmit}>
        {/* Controlled Input */}
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
        <br />

        {/* Uncontrolled Input with Ref */}
        <input type="text" ref={inputRef} placeholder="Add Item" />
        <button type="submit">Add</button>
      </form>

      {/* Display Username */}
      {username && <p>Welcome, {username}!</p>}

      {/* Render List with Keys */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> // Keys for unique identification
        ))}
      </ul>
    </div>
  );
}

export default FormComponent;