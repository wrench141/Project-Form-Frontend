import "../../src/App.css";

export default function Input({label, setValue, value, placeholder, show, type, disabled}){
    return(
        <div className="wrap inp-wrap">
            {
                show ? (
                    <label htmlFor="" className="lab">{label}</label>
                ) : null
            }
            <input type={type == undefined ? "text" : "password"} disabled={disabled} name="" id="" value={value} onChange={(e) => setValue(e.target.value)} className="inp" placeholder={placeholder} />
        </div>
    )
}