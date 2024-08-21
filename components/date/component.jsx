import { useState } from "react";
import "../../src/App.css";

export default function DateC({ label, setValue, value, placeholder }) {
  const [from, setFrom] = useState(value.from || "");
  const [to, setTo] = useState(value.to || ""); 

  const handleChange = (e, setState) => {
    const newValue = e.target.value;
    setState(newValue);

    const updatedState = {
      ...value,
      [e.target.name]: newValue,
    };
    setValue(updatedState);
  };

  return (
    <div className="wrap inp-wrap">
      <label htmlFor="" className="lab">
        {label}
      </label>
      <div className="row">
        <input
          type="date"
          name="from"
          id=""
          value={value.from || from}
          onChange={(e) => handleChange(e, setFrom)}
          className="inp"
          placeholder={placeholder}
        />
        <p className="lab">To</p>
        <input
          type="date"
          name="to"
          id=""
          value={value.to || to}
          onChange={(e) => handleChange(e, setTo)}
          className="inp"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
