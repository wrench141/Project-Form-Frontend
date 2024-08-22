import "./ack.css";

export default function Ack(){

    return (
      <div className="container">
        <div className="wrapper ack">
          <div className="section ack">
            <p className="title">VIIT EXIT FORM</p>
            <p className="sub">
              Your form has been submitted successfully. We will process your
              data and notify you shortly. Thank you for your submission!
            </p>
            <a href="/" className="link">
              Submit another form
            </a>
          </div>
        </div>
      </div>
    );
}