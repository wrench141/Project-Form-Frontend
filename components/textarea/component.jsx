import "../../src/App.css";

export default function TextArea({label, disabled, value, setValue}){
    return (
      <div className="wrap ta">
        <div className="lab">{label}</div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className={`inp tarea ${disabled ? "disabled" : null}`}
          placeholder="Write your description..."
          disabled={disabled}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>
    );
}