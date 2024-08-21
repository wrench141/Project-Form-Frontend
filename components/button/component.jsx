import { useState } from "react";
import "../../src/App.css";

export default function Button({label, callback}){
    const[idle, setIdle] = useState(true);
    return (
      <div className="wrap bt">
        <button
          className="btn"
          onClick={() => {
            setIdle(false);
            callback().then(() => {
                setIdle(true)
            })
          }}
        >
          {!idle ? <div className="loading"></div> : <span>{label}</span>}
        </button>
      </div>
    );
}