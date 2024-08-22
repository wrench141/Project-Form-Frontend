import "../../src/App.css";


export default function Radio({label, value, callback, category, setState, state}){
    return (
      <div className="wrap rd">
        <div className="radio">
          <div className="circle"></div>
        </div>
        <label htmlFor={label + category} className="lab">
          {label}
        </label>
        <input type="radio" checked={value == state} name={category} id={label + category} value={value} onChange={e => setState(e.target.value)}/>
      </div>
    );
}