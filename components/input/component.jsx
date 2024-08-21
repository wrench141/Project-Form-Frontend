import "../../src/App.css";

export default function Input({label, setValue, value, placeholder, show, type}){
    return(
        <div className="wrap inp-wrap">
            {
                show ? (
                    <label htmlFor="" className="lab">{label}</label>
                ) : null
            }
            <input type={type == undefined ? "text" : "password"} name="" id="" value={value} onChange={(e) => setValue(e.target.value)} className="inp" placeholder={placeholder} />
        </div>
    )
}