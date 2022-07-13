import React, { useState } from "react";
import "../styles/Dropdown.css";
import Select from "react-select";

export default function App() {
  // React state a kiválasztott opció kezelése
  const [selectedOptions, setSelectedOptions] = useState();

  // Array az összes opció
  const optionList = [
    { value: "Computer", label: "Computer" },
    { value: "Mobile", label: "Mobile" },
    { value: "Monitor", label: "Monitor" },
    { value: "Smart Watch", label: "Smart Watch" },
    { value: "Accessories", label: "Accessories" }
  ];

  // Kiválasztáskor aktiválódik a funkció
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  return (
    <div className="app">
      <div className="dropdown-container">
        <Select
          options={optionList}
          placeholder="Search your item..."
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti
        />
      </div>
    </div>
  );
}