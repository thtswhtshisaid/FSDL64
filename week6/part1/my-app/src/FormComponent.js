import React, { useRef, useState } from "react";

function FormComponent() {
  const [items, setItems] = useState([]);
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = inputRef.current.value;
    if (newItem) {
      setItems([...items, newItem]);
      inputRef.current.value = "";
    }
  }

  return (
    <div>
      <h2>Form Example</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add Item" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> // Using `key` for unique identification.
        ))}
      </ul>
    </div>
  );
}

export default FormComponent;