import React from "react";
import Axios from "axios";

function AdminHome() {
    let [responseData, setResponseData] = React.useState('')

    Axios({
        method: "GET",
        url: "http://localhost:4000/",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        setResponseData(res.data);
        console.log(res.data);
    }).catch(error => {
        console.log(error);
        setResponseData(error);
    });;

    return (
        <div>
            {responseData}
        </div>
    );
}

export default AdminHome;
