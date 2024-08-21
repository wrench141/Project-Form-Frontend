import "../../src/App.css";

export default function Title({title}){
    return (
      <div className="wrap">
        <p className="title">{title}</p>
        <p className="sub">Fill the form with Correct Details.</p>
      </div>
    );
}