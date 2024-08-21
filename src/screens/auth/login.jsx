import { useState } from "react";
import Button from "../../../components/button/component";
import Input from "../../../components/input/component";
import Modal from "../../../components/modal/component";
import Title from "../../../components/title/component";
import "./login.css";
import axios from "axios";
import DBURL from "../../config";

export default function Login(){
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[show, setShow] = useState(false);
    const[msg, setMsg] = useState("");


    const submitHandler = () => {
        try {
            const url = DBURL + "/api.v1/users/login";
            setShow(true)
            axios.post(url, {
                email, password
            }).then(response => {
                if(response.status == 200){
                    setMsg(response.data.data);
                    window.localStorage.setItem("token", response.data.token);
                    setTimeout(() => {
                        window.location.href = "/admin"
                    }, 3000);
                }else{
                    setMsg("Invalid Credintials")
                }
            })
            console.log(email, password)
        } catch (error) {
            console.log(error)
        }
    }

    return (
      <div className="container">
        <Title title="VIIT Admin Login" />
        {
            show ? (
                <Modal label={msg} />
            ) : null
        }
        <div className="wrapper">
          <div className="section rd">
            <Input
              label={"Email Id"}
              value={email}
              setValue={setEmail}
              placeholder={"Ex: admin@AwQw.com"}
              show={true}
            />
            <Input
              label={"Password"}
              value={password}
              setValue={setPassword}
              placeholder={"Password"}
              type={"password"}
              show={true}
            />
          </div>
          <div className="section">
            <Button label={"Login "} callback={submitHandler} />
          </div>
        </div>
      </div>
    );
}