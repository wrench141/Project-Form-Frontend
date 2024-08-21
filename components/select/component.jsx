import { useState } from "react";
import "../../src/App.css";

export default function Select({ label, options, name, setValue }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [otherValue, setOtherValue] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    setValue(e.target.value);
    console.log(e.target.value)
  };

  const handleOtherChange = (e) => {
    setOtherValue(e.target.value);
  };

  return (
    <div className="wrap sel">
      <label htmlFor={name} className="lab">
        {label}
      </label>
      <div className="row">
        <select
          name={name}
          id={name}
          className="selt"
          onChange={handleSelectChange}
          value={selectedOption}
        >
          {options.map((option) => (
            <option value={option} key={option} className="option">
              {option}
            </option>
          ))}
        </select>

        {selectedOption.toLowerCase() === "others" && (
          <input
            type="text"
            placeholder={`Specify ${name}`}
            value={otherValue}
            onChange={handleOtherChange}
            className="inp"
          />
        )}
      </div>
    </div>
  );
}
