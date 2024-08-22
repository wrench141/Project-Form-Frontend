import "./admin.css"
import axios from "axios"
import { useEffect, useState } from "react";
import DBURL from "../../config";

export default function Admin(){
    const[token, setToken] = useState("");
    const[data, setData] = useState([]);

    const heads = ["sno", "refId", "Employee Id", "Employee Name", "Department", "Reason For Leaving", "issued Date", "Action"];
    const dummyData = [{"refId": "20230523A03", "id" : "22L35A5402", "name": "Sidhardha", "dpt" : "AI&DS", "reason": "Resignation"}]

    useEffect(() => {
        let local_token = window.localStorage.getItem("token");
        setToken(local_token);
        if(local_token){
          axios.get( DBURL + "/api.v1/form/getData", {headers: {
              token: token
          }}).then((response) => {
              setData(response.data.data)
              console.log(response.data.data[0])
          });
        }else{
          window.location.href = "/login"
        }
    },[])

    return (
      <div className="panel">
        <div className="wrap-row">
          <div className="inwrap">
            <p className="title">VIIT EXIT FORM - PANEL</p>
            <p className="sub">Control your data flow here</p>
          </div>
          <div className="inwrap-col">
            <button className="dbtn outline">Export Data</button>
            <button className="dbtn" onClick={() => window.localStorage.clear()}>Logout</button>
          </div>
        </div>
        <table className="table">
          <tr className="row">
            {heads.map((head) => (
              <th className="th">{head}</th>
            ))}
          </tr>
          {data?.map((udata, i) => (
            <tr className="dataRow">
              <td className="td">{i + 1}</td>
              <td className="td">{udata.refId}</td>
              <td className="td">{udata.data.id}</td>
              <td className="td">{udata.data.name}</td>
              <td className="td">{udata.data.dpt}</td>
              <td className="td">{udata.data.reason.reason}</td>
              <td className="td">{udata.createdAt.split("T")[0]}</td>
              <td className="td">
                <div className="inwrap-col tdbtn">
                  <button className="dbtn outline" onClick={() => {window.location.href = `/${udata._id}`}}>View</button>
                  <button className="dbtn">Update</button>
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
}